import { FC, ReactElement } from 'react';
import styles from './Toolbar.module.css';
import CircleOutline from '../SVG/outline/CircleOutline.tsx';
import SquareOutline from '../SVG/outline/SquareOutline.tsx';
import Cursor from '../SVG/fill/Cursor.tsx';
import PencilOutline from '../SVG/outline/PencilOutline.tsx';

interface Tool {
    name: string,
    icon: ReactElement
}

interface ToolbarProps {
    onToolClick: (toolName: string) => void
}

const tools:Tool[] = [
    {
        name: 'cursor',
        icon: <Cursor styles={styles.toolIcon} />
    },
    {
        name: 'pencil',
        icon: <PencilOutline styles={styles.toolIcon}/>
    },
    {
        name: 'square',
        icon: <SquareOutline styles={styles.toolIcon} />
    },
    {
        name: 'circle',
        icon: <CircleOutline styles={styles.toolIcon} />
    }
];

const Toolbar:FC<ToolbarProps> = ({onToolClick}) => {
    return (
        <div className={styles.toolbarContainer}>
            <ul className={styles.toolsList}>
                {tools.map((tool) => (
                    <li
                        onClick={() => onToolClick(tool.name)}
                        key={tool.name}
                        className={styles.toolIconContainer}
                    >
                        {tool.icon}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Toolbar;
