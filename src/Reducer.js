import { useState } from "react"

export const Reducer = () => {
    const [text, setText] = useState('')

    return(
        <div className="ReducerStyle">
        <h3>Where do yo wanna go?</h3>
            <input type="text" 
                    value={text}
                    onChange={ (e) => setText(e.target.value) }
            />
            <p>I wanna go to: <span>{text}</span></p>


        </div>
    )
}