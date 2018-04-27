import React from 'react'
import ReactDOM from 'react-dom'
import store from './store/Store'
import Lab3 from './Conteiner/PartInfo'
import {Provider} from 'react-redux';



const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <Lab3 />
        </Provider>,
        document.getElementById('root'))
};

store.dispatch({
    type : 'BEGIN_WORK'
});
store.subscribe(render);
render();
