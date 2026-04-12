import React, { useRef, useEffect } from 'react';

interface NoiseProps {
  patternSize?: number;
  patternScaleX?: number;
  patternScaleY?: number;
  patternRefreshInterval?: number;
  patternAlpha?: number;
}

const Noise: React.FC<NoiseProps> = ({
  patternSize = 250,
  patternScaleX = 1,
  patternScaleY = 1,
  patternRefreshInterval = 2,
  patternAlpha = 15
}) => {
  const grainRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = grainRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let frame = 0;
    let animationId: number;

    const canvasSize = 1024;

    const resize = () => {
      if (!canvas) return;
      canvas.width = canvasSize;
      canvas.height = canvasSize;

      canvas.style.width = '100vw';
      canvas.style.height = '100vh';
    };

    const noiseTextures: HTMLCanvasElement[] = [];
    const numTextures = 6;

    const preGenerate = () => {
      for (let n = 0; n < numTextures; n++) {
        const tCanvas = document.createElement('canvas');
        tCanvas.width = canvasSize;
        tCanvas.height = canvasSize;
        const tCtx = tCanvas.getContext('2d');
        if (!tCtx) continue;

        const imageData = tCtx.createImageData(canvasSize, canvasSize);
        const data = imageData.data;
        for (let i = 0; i < data.length; i += 4) {
          const val = Math.random() * 255;
          data[i] = val;
          data[i+1] = val;
          data[i+2] = val;
          data[i+3] = patternAlpha;
        }
        tCtx.putImageData(imageData, 0, 0);
        noiseTextures.push(tCanvas);
      }
    };

    const loop = () => {
      if (frame % patternRefreshInterval === 0) {
        const tex = noiseTextures[Math.floor(Math.random() * numTextures)];
        if (tex) {
          ctx.clearRect(0, 0, canvasSize, canvasSize);
          ctx.drawImage(tex, 0, 0);
        }
      }
      frame++;
      animationId = window.requestAnimationFrame(loop);
    };

    window.addEventListener('resize', resize);
    resize();
    preGenerate();
    loop();

    return () => {
      window.removeEventListener('resize', resize);
      window.cancelAnimationFrame(animationId);
    };
  }, [patternSize, patternScaleX, patternScaleY, patternRefreshInterval, patternAlpha]);

  return (
    <canvas
      className="pointer-events-none absolute top-0 left-0 h-screen w-screen"
      ref={grainRef}
      style={{
        imageRendering: 'pixelated'
      }}
    />
  );
};

export default Noise;
