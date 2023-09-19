import { useContext, useReducer } from "react"
import { ContextTheme } from "./App";

function reducer(state, action) {
    switch(action.type) {
        case 'Multiply': return { count: state.count *5 };
        case 'Devided' : return { count: state.count /5 };
        default : return state;
    }
}

export const ReducerMultiply = () => {
    const [state, dispatch] = useReducer(reducer, {count: 10})

    const theme = useContext(ContextTheme)

    const changeButtonColor = {
        color: theme ? 'black' : 'green',
        backgroundColor: theme ? 'white' : '#cef4ce'
    }

    return(
        <div className="ReducerCounterStyle">
            <h3>counter(*5 & /5)</h3>
            <h4>useReducer() useContext()</h4>
            <p>{state.count}</p>
            <button onClick={ () => dispatch( {type:'Multiply'} )} style={changeButtonColor}>Multiply</button>
            <button onClick={ () => dispatch( {type:'Devided'} )} style={changeButtonColor}>Devided</button>
        </div>
    )
}