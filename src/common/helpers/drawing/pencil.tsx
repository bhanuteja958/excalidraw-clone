export const pencilMouseUpHandler: (ctx: CanvasRenderingContext2D, event:MouseEvent) => void = (
    ctx: CanvasRenderingContext2D, event:MouseEvent
) => {

    const currentPoint: Point = {
        x: event.clientX,
        y: event.clientY,
    };

    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.lineTo(currentPoint.x, currentPoint.y);
    ctx.stroke();
};

export const pencilMouseDownHandler: (ctx: CanvasRenderingContext2D) => void = (ctx: CanvasRenderingContext2D) => {
    ctx.beginPath();
    return;
};

export const pencilMouseMoveHandler: (
    ctx: CanvasRenderingContext2D,
    event: MouseEvent
) => void = (ctx: CanvasRenderingContext2D, event: MouseEvent) => {
    const currentPoint: Point = {
        x: event.clientX,
        y: event.clientY,
    };

    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.lineTo(currentPoint.x, currentPoint.y);
    ctx.stroke();
};
