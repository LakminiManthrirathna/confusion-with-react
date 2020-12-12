import React, {useState} from 'react';
import './App.css';
import Main from './components/MainComponent';
import {DISHES} from './shared/dishes';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import {configure} from './redux/configure'

const store = configure();

function App() {
    const [dishes, setDishes] = useState(DISHES);
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="App">
                    <Main />
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
