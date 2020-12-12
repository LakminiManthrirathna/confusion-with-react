import {createStore} from 'redux';
import { Reducer, initialState } from './reducer'

export const configure = () => {
    const store = createStore(
        Reducer, // reducer
        initialState, // our initialState
    );

    return store;
}
