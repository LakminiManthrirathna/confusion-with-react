import React, { useState } from 'react';
import './App.css';
import Main from './components/MainComponent';
import { DISHES } from './shared/dishes';

function App() {
    const [dishes, setDishes]=useState(DISHES);
    return (
        <div className="App">
            <Main />
        </div>
    );
}

export default App;
