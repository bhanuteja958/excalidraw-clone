import { MutableRefObject, useEffect, useRef } from "react"
import { INITIAL_SELECTED_TOOL } from "../common/constants";
import { pencilMouseDownHandler, pencilMouseMoveHandler, pencilMouseUpHandler } from "../common/helpers/drawing/pencil";

export const useDraw = () => {
    const canvasRef: MutableRefObject<null | HTMLCanvasElement> = useRef<null | HTMLCanvasElement>(null);
    const selectedTool: MutableRefObject<string> = useRef<string>(INITIAL_SELECTED_TOOL);
    const isDrawing: MutableRefObject<boolean> = useRef<boolean>(false);
    const context2D: MutableRefObject<null | CanvasRenderingContext2D> = useRef<null | CanvasRenderingContext2D>(null);

    const setIsDrawing: (isMouseDown:boolean) => void = (isMouseDown: boolean) => {
        setIsDrawing(isMouseDown)
    }

    const mouseupHandler: (event:MouseEvent) => void = (event:MouseEvent) => {
        isDrawing.current = false;
        const ctx: null | CanvasRenderingContext2D =  context2D.current || null;
        if(ctx) {
            switch (selectedTool.current) {
                case 'pencil':
                    pencilMouseUpHandler(ctx, event);
                    break;
                default: 
                    break;
            }
        }
    };  

    const mousedownHandler: () => void = () => {
        isDrawing.current = true;
        const ctx: null | CanvasRenderingContext2D =  context2D.current || null;

        if(ctx) {
            switch (selectedTool.current) {
                case 'pencil':
                    pencilMouseDownHandler(ctx);
                    break;
                default: 
                    break;
            }
        }
    };
    
    const mousemoveHandler: (event: MouseEvent) => void = (event:MouseEvent) => {
        const ctx: null | CanvasRenderingContext2D =  context2D.current || null;
        
        if(ctx && isDrawing.current) {
            switch (selectedTool.current) {
                case 'pencil':
                    pencilMouseMoveHandler(ctx, event);
                    break;
                default: 
                    break;
            }
        }
    };

    const setSelectedTool: (tool:string) => void = (toolName:string) => {
        selectedTool.current = toolName;
    }

    useEffect(() => {
        if(canvasRef.current) {
            canvasRef.current.width = window.innerWidth - 4;
            canvasRef.current.height = window.innerHeight - 4;
            context2D.current = canvasRef.current.getContext('2d');
            canvasRef.current.addEventListener('mousedown', mousedownHandler);
            canvasRef.current.addEventListener('mouseup',  mouseupHandler);
            canvasRef.current.addEventListener('mousemove', mousemoveHandler);
        }

        
        return () => {
            if(canvasRef.current) {
                canvasRef.current.removeEventListener('mousedown', mousedownHandler);
                canvasRef.current.removeEventListener('mouseup',  mouseupHandler);
                canvasRef.current.removeEventListener('mousemove', mousemoveHandler);
            }
        }
    }, []);

    return {setSelectedTool, canvasRef}
}