import React from 'react'
import ReactDOM from 'react-dom'

import Lab3 from './Conteiner/PartInfo'
import {Provider} from 'react-redux';
import { createStore , applyMiddleware} from 'redux'
import { combineReducers } from 'redux'
import tabReducer from './reducers/tabs'
import bioInfo from './reducers/bioInfo'
import createSagaMiddleware from 'redux-saga';
import sagasWatcher from './sagas';

const sagaMiddleware = createSagaMiddleware();


const Lab3App = combineReducers({
    bioInfo,
    tabReducer
});

const store = createStore(Lab3App,applyMiddleware(sagaMiddleware));
store.dispatch({
    type : 'BEGIN_WORK'
});
sagaMiddleware.run(sagasWatcher);

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <Lab3 />
        </Provider>,
        document.getElementById('root'))
};

store.subscribe(render);
render();
