import { useEffect, useReducer, useRef } from "react"

function reducer(state,action) {
    switch(action.type) {
        case 'Start' : return { ...state, isTicking: true };
        case 'Pause' : return { ...state, isTicking: false };
        case 'Reset' : return { time: 0 , isTicking: false };
        case 'Tick' : return {...state, time: state.time + 1};
        default: return state;
    }
}

const initialState = {
    time: 0,
    isTicking: false
}

export const Timer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const myTimerRef = useRef(0);

    useEffect( () => {
        if(!state.isTicking) {
            return;
        }
        myTimerRef.current = setInterval( () => dispatch({type:'Tick'}), 1000)
        return () => {
            clearInterval(myTimerRef.current);
            myTimerRef.current = 0
        }
    }, [state.isTicking])

    return(
        <div className="TimerReducerStyle">
        <h3>Timer</h3>
            <p><span>{state.time}</span> seconds</p>
            <button onClick={ () => dispatch( {type: 'Start'} )}>Start</button>
            <button onClick={ () => dispatch( {type: 'Pause'} )}>Pause</button>
            <button onClick={ () => dispatch( {type: 'Reset'} )}>Reset</button>
        </div>
    )
}