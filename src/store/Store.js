import { createStore , applyMiddleware} from 'redux'
import { combineReducers } from 'redux'
import tabReducer from '../reducers/tabs'
import bioInfo from '../reducers/bioInfo'
import thunk from 'redux-thunk';

const Lab3App = combineReducers({
    bioInfo,
    tabReducer
});

const store = createStore(Lab3App,applyMiddleware(thunk))

export default store