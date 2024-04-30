import { useEffect, useRef } from 'react';
import styles from './App.module.css';

function App() {
  const canvasRef = useRef<null | HTMLCanvasElement>(null);
  const canvasCtx = useRef<null | CanvasRenderingContext2D>(null);
  const isDrawing = useRef<boolean>(false);
  // const previousPoint = useRef<null | Point>(null);

  useEffect(() => {

    const resizeHandler = () => {
      if(canvasRef.current) {
        canvasRef.current.width = window.innerWidth - 3;
        canvasRef.current.height = window.innerHeight - 3; 
      } 
    }

    window.addEventListener('resize', resizeHandler);

    const mousedownHandler = () => {
     isDrawing.current = true;
    }

    const mouseupHandler = () => {
      const ctx: null | CanvasRenderingContext2D = canvasCtx.current;
      isDrawing.current = false;
      if (ctx) {
        ctx.beginPath();
        ctx.stroke();
      } 
    }

    const mousemoveHandler = (event: MouseEvent) => {
      const ctx: null | CanvasRenderingContext2D = canvasCtx.current;
      const currentPoint: Point = {
        x: event.clientX,
        y: event.clientY
      }

  
      
      if(isDrawing.current && ctx) {
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.lineTo(currentPoint.x, currentPoint.y);
        ctx.stroke();
      }
    }

    if(canvasRef.current) {
      resizeHandler();
      const ctx = canvasRef.current.getContext('2d');
      canvasCtx.current = ctx;
      canvasRef.current.addEventListener('mousedown', mousedownHandler);
      canvasRef.current.addEventListener('mouseup', mouseupHandler);
      canvasRef.current.addEventListener('mousemove', mousemoveHandler);
    }

    return () => {
      window.removeEventListener('resize', resizeHandler);
      if(canvasRef.current) {
        canvasRef.current.removeEventListener('mousedown', mousedownHandler);
        canvasRef.current.removeEventListener('mouseup', mouseupHandler);
        canvasRef.current.removeEventListener('mousemove', mousemoveHandler);
      }
    };
  },[])

  return (
    <main>
      <canvas 
        ref={canvasRef}
        className={styles.drawingCanvas} 
        width="600"
        height="600"
      />
    </main>
  )
}

export default App
