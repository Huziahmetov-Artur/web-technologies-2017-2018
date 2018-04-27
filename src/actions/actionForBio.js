import {getFollowers,getInfo,getRepos} from './GitApi'

export const getBioInfo = (e) => (dispatch) => {

        getFollowers().then((e) => {
            dispatch({
                type : 'SET_FOLLOWERS',
                followers : e.map(elem =>  elem['login'])
            })
        })

        getRepos().then((e) => {
            dispatch({
                type : 'SET_REPOS',
                repos : e.map(elem => elem['html_url'].slice(elem['html_url'].lastIndexOf('/') + 1,elem['html_url'].length - 1))
            })
        })

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

}

