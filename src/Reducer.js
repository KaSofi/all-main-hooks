import { useRef, useState } from "react"

export const Reducer = () => {
    const [text, setText] = useState('')
    const inputRef = useRef()

    const focus = () => {
        inputRef.current.focus()
    }

    return(
        <div className="ReducerStyle">
            <h3>Where do yo wanna go?</h3>
            <h4>useReducer()</h4>
            <input type="text" 
                    value={text}
                    ref={inputRef}
                    onChange={ (e) => setText(e.target.value) }
            />
            <p>I wanna go to: <span>{text}</span></p>
            <button onClick={focus}>Outline input</button>
        </div>
    )
}
