import { createStore } from 'redux'
import { combineReducers } from 'redux'

const BeginState = {
    start : true,
    login : '',
    img_url : '',
    bio : '',
    name : '',
    company : '',
    location : '',
    email : '',
    blog : ''
};
const BeginStateTab = {
    canEdit : false,
    main : {
        first: '',
        second: '',
        third: ''
    },
    currentTab : ''
}
const TabReducer = (state = BeginStateTab, action) =>{

    switch(action.type){
        case 'START_TAB':
            return state;
        case 'FIRST_BUTTON':
            return {
                ...state,
                currentTab : 'first',
                main : {
                    first : action.content ? action.content : state.main.first,
                    second : state.main.second,
                    third : state.main.third
                }
            };
        case 'SECOND_BUTTON':
            return {
                ...state,
                currentTab : 'second',
                main : {
                    first : state.main.first,
                    second : action.content ? action.content : state.main.second,
                    third : state.main.third
                }
            };
        case 'THIRD_BUTTON':
            return {
                ...state,
                currentTab : 'third',
                main : {
                    first : state.main.first,
                    second : state.main.second,
                    third : action.content ? action.content : state.main.third
                }
            };
        case 'CAN_EDIT':
            return {
                ...state,
                canEdit : !state.canEdit
            }
        default :
            return state;
    }
}

const bioInfo = ( state = [], action) => {
    switch(action.type){
        case 'SET_STATE':
            return Object.assign({},state , {
                start: false,
                login : action.login,
                img_url : action.img_url,
                bio : action.bio,
                name : action.name,
                company : action.company,
                location : action.location,
                email : action.email,
                blog : action.blog,
                followers : action.followers,
                repos : action.repos
            });
        case 'BEGIN_WORK':
            return BeginState;
        default :
            return state
    }
};
const Lab3App = combineReducers({
    bioInfo,
    TabReducer
});

const store = createStore(Lab3App)

export default store