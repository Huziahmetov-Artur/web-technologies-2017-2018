
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

const bioInfo = ( state = [], action) => {
    switch(action.type){
        case 'SET_STATE':
            return {
                ...state,
                start: false,
                login : action.login,
                img_url : action.img_url,
                bio : action.bio,
                name : action.name,
                company : action.company,
                location : action.location,
                email : action.email,
                blog : action.blog
            };
        case 'BEGIN_WORK':
            return BeginState;
        case 'SET_FOLLOWERS':
            return {
                ...state,
                followers : action.followers
            };
        case 'SET_REPOS':
            return {
                ...state,
                repos : action.repos
            };
        default :
            return state
    }
};


export default bioInfo;