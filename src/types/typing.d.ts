declare module "*.module.css";


type canvas2dContext = MutableRefObject<null | CanvasRenderingContext2D>
interface Point {
    x: number
    y: number
}

interface SVGProps {
    styles?: string
}