import { FC } from "react";
import Toolbar from "../Toolbar/Toolbar";
import styles from './DrawingWrapper.module.css';
import { useDraw } from "../../hooks/useDraw";

const DrawingWrapper: FC<{}> = () => {
    const {setSelectedTool, canvasRef} = useDraw();

    const toolClickHandler: (toolName: string) => void = (toolName: string) => {
        setSelectedTool(toolName);
    }

    return (
        <main className={styles.drawingContainer}>
            <canvas 
            ref={canvasRef}
            className={styles.drawingCanvas} 
            width="600"
            height="600"
            />
            <Toolbar onToolClick={toolClickHandler}/>
        </main>
    );
};

export default DrawingWrapper;