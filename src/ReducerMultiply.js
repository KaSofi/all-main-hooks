import { useReducer } from "react"

function reducer(state, action) {
    switch(action.type) {
        case 'Multiply': return { count: state.count *5 };
        case 'Devided' : return { count: state.count /5 };
        default : return state;
    }
}

export const ReducerMultiply = () => {
    const [state, dispatch] = useReducer(reducer, {count: 10})
    return(
        <div className="ReducerCounterStyle">
        <h3>useReducer() counter(*5 & /5)</h3>
            <p>{state.count}</p>
            <button onClick={ () => dispatch( {type:'Multiply'} )}>Multiply</button>
            <button onClick={ () => dispatch( {type:'Devided'} )}>Devided</button>
        </div>
    )
}