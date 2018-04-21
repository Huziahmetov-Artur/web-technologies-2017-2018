import React from 'react'
import ReactDOM from 'react-dom'
import store from './Store'
import Lab3 from './PartInfo'



const render = () => {
    ReactDOM.render(<Lab3 />,document.getElementById('root'))
};

store.dispatch({
    type : 'BEGIN_WORK'
});
store.subscribe(render);
render();
