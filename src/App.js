import { Audio } from './Audio';
import './App.css';
import UseReducer from './UseReducer';
import { Reducer } from './Reducer';
import { ReducerMultiply } from './ReducerMultiply';
import { Timer } from './Timer';

function App() {
  
  return (
    <div className="App">
    <Timer/>
    <ReducerMultiply/>
    <Reducer/>
    <UseReducer/>
    <Audio/>
    </div>
  );
}

export default App;
