import { createStore, combineReducers, compose } from 'redux';
import { uiReducer } from './uiReducer.js';

function makeStore(){
    const allReducers = combineReducers({
        uiReducer: uiReducer
    });

    return(
        createStore(
            allReducers,
            //for redux dev tools I think
            compose(typeof window === "object" &&
                typeof window.devToolsExtension !== "undefined" ?
                window.devToolsExtension() :
                f => f
            )
        )
    )
}

export {makeStore};