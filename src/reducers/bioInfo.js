
const BeginState = {
    start : true,
    login : '',
    bio : '',
    name : '',
    phone : '',
    email : ''
};

const bioInfo = ( state = [], action) => {

    if(state){
        if(state.length > 9)
        return state
    }
    switch(action.type){
        case 'SET_STATE':
            return [
                ...state,
                {
                start: false,
                login : action.login,
                bio : action.bio,
                name : action.name,
                phone : action.phone,
                email : action.email
            }];
        case 'BEGIN_WORK':
            return BeginState;
        case 'SET_FOLLOWERS':
            return {
                ...state,
                followers : action.followers
            };
        case 'SET_LS':
            return action.LS

        default :
            return state
    }
};


export default bioInfo;