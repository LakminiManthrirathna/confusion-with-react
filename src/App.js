import React, {useState} from 'react';
import './App.css';
import Main from './components/MainComponent';
import {DISHES} from './shared/dishes';
import {BrowserRouter} from 'react-router-dom';

function App() {
    const [dishes, setDishes] = useState(DISHES);
    return (
        <BrowserRouter>
            <div className="App">
                <Main/>
            </div>
        </BrowserRouter>
    );
}

export default App;
