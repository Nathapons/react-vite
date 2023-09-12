import { useState } from 'react';
import './Item.css';

export default function Item(props) {
    const [show, setShow] = useState(false)
    const [text, setText] = useState("hide")
    const {title, description} = props

    function hideText() {
        setText(text === 'show'? "hide": "show")
        setShow(!show)
    }

    return (
        <section>
            <div className="content">
                <h4>{title}</h4>
                <button onClick={() => hideText()}>{text}</button>
            </div>
            {show && <p>{description}</p>}
        </section>
    )
}