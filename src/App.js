import { Audio } from './Audio';
import './App.css';
import UseReducer from './UseReducer';
import { Reducer } from './Reducer';
import { ReducerMultiply } from './ReducerMultiply';
import { Timer } from './Timer';

import React, { useState } from 'react';

export const ContextTheme = React.createContext();

function App() {

  const [ theme, setTheme ] = useState(true)

  const changeTheme = () => {
      setTheme((myFirstTheme) => !myFirstTheme)
  }

  const ThemeList = {
      backgroundColor: theme ? 'black' : 'beige'
  }
  
  return (
    <div style={ThemeList} className='MainPageStyle'>
        
        <div className='ContextThemeStyle'>
          <button onClick={changeTheme}>change theme</button>
        </div>
        <div className="App">
          <Timer/>
          <ContextTheme.Provider value={theme}>
            <ReducerMultiply/>
          </ContextTheme.Provider>
          <Reducer/>
          <UseReducer/>
          <ContextTheme.Provider value={theme}>
            <Audio/>
          </ContextTheme.Provider>
        </div>
    </div>
  );
}

export default App;
