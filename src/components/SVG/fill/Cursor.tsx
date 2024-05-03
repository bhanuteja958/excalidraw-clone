import { FC } from "react"

const Cursor:FC<SVGProps> = ({styles}) => {
    return (
        <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className={styles || ''}>
            <rect fill="none" height="256" width="256"/>
            <path d="M150.5,139.2l55.9-20.3a16,16,0,0,0,.1-30L51.3,30.7A16,16,0,0,0,30.7,51.3h0L88.9,206.5a15.9,15.9,0,0,0,15,10.4h.1a15.9,15.9,0,0,0,14.9-10.5l20.3-55.9,63.1,63.2A8.5,8.5,0,0,0,208,216a8.3,8.3,0,0,0,5.7-2.3,8.1,8.1,0,0,0,0-11.4Z"/>
        </svg>
    )
};

export default Cursor;