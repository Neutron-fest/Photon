import { NextRequest, NextResponse } from "next/server";

const rt = (value: string) => [{ text: { content: value ?? "" } }];
const NOTION_VERSION = "2022-06-28";

const buildNotionHeaders = (token: string) => ({
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
  "Notion-Version": NOTION_VERSION,
});

const sanitizeNotionId = (rawId: string) =>
  String(rawId || "")
    .trim()
    .replace(/^https?:\/\/[^/]+\//i, "")
    .replace(/[^a-fA-F0-9-]/g, "");

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      whatsapp,
      course,
      enrollmentNumber,
      yearOfStudy,
      teammates,
      glimpse,
      eventsname,
      mode
    } = body;

    const notionToken = process.env.NOTION_TOKEN;
    const databaseId = sanitizeNotionId(
      process.env.NOTION_DATABASE_EVENT_ID || "",
    );

    if (!notionToken || !databaseId) {
      console.error("Missing NOTION_TOKEN or NOTION_DATABASE_EVENT_ID in .env.local");
      return NextResponse.json(
        { error: "Server configuration error — Notion credentials not set" },
        { status: 500 }
      );
    }

    const properties: any = {
      " Name": {
        title: rt(name),
      },
      Email: {
        email: email || null,
      },
      "Contact Number": {
        number: parseInt(whatsapp.replace(/\D/g, "")) || 0,
      },
      Course: {
        rich_text: rt(course || ""),
      },
      "Enrollment Number": {
        number: parseInt(enrollmentNumber.replace(/\D/g, "")) || 0,
      },
      "Event Name": {
        rich_text: rt(eventsname || ""),
      },
      Year: {
        multi_select: yearOfStudy ? [{ name: yearOfStudy.replace(" Year", "") }] : [],
      },
    };

    // Map teammates to individual fields as per DB schema
    if (mode === "Team" && teammates && Array.isArray(teammates)) {
      teammates.forEach((m: any, i: number) => {
        const idx = i + 2; // Teammates start from Member 2
        if (idx <= 6) {
          if (m.name) properties[`Member ${idx} Name`] = { rich_text: rt(m.name) };
          if (m.email) properties[`Member ${idx} Email`] = { email: m.email };
          if (m.contact) properties[`Member ${idx} Contact`] = { 
            number: parseInt(m.contact.replace(/\D/g, "")) || 0 
          };
        }
      });
    }

    const createInNotion = async (parent: {
      database_id?: string;
      page_id?: string;
    }) =>
      fetch("https://api.notion.com/v1/pages", {
        method: "POST",
        headers: buildNotionHeaders(notionToken),
        body: JSON.stringify({
          parent,
          properties,
        }),
      });

    let response = await createInNotion({ database_id: databaseId });
    let errorData: any = null;

    if (!response.ok) {
      errorData = await response.json().catch(() => null);
      const isPageIdError =
        errorData?.code === "validation_error" &&
        typeof errorData?.message === "string" &&
        errorData.message.includes("is a page, not a database");

      if (isPageIdError) {
        response = await createInNotion({ page_id: databaseId });
        if (!response.ok) {
          errorData = await response.json().catch(() => null);
        } else {
          errorData = null;
        }
      }
    }

    if (!response.ok) {
      console.error("Notion API error:", JSON.stringify(errorData, null, 2));
      return NextResponse.json(
        {
          error: "Failed to sync to Notion",
          message:
            errorData?.message ||
            "Could not write to Notion. Ensure NOTION_DATABASE_COMPI_ID is valid and shared with your integration.",
          details: errorData,
        },
        { status: response.status || 500 },
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Notion Sync API error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
