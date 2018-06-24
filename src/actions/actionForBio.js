import {getInfo} from './GitApi'
export function setContent() {
    console.log('here');
    return {
        type: 'SET_STATEE'
    }
}

export const getBioInfo = (e) => (dispatch) => {


    getInfo().then((e) => {
        dispatch({
            type : 'SET_STATE',
            login : e['login'],
            img_url : e['avatar_url'],
            bio : e['bio'],
            name : e['name'],
            company : e['company'],
            location : e['location'],
            email : e['email'],
            blog : e['blog']
        })
    })

};

