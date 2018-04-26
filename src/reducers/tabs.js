const BeginStateTab = {
    canEdit : false,
    main : {
        first: '',
        second: '',
        third: ''
    },
    currentTab : '',
}
const tabReducer = (state = BeginStateTab, action) =>{

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
export default tabReducer;