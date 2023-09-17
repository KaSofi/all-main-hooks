import { useEffect, useRef, useState } from "react"

function UseReducer() {
    const [count, setCount] = useState(0)

    const previouseCountRef = useRef
    const previouseCount = previouseCountRef.current

    useEffect(() => {
        previouseCountRef.current = count
    })

    return(
        <div className="UseReducerPreviousCounterStyle">
        <h3>Previous state counter</h3>
            <p>current: {count}</p>
            <p>previous: {previouseCount}</p>
            <button onClick={ () => setCount( count + 1 )}>NEXT</button>
        </div>
    )
}

export default UseReducer