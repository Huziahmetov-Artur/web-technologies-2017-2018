import {getFollowers,getInfo,getRepos} from './GitApi'

export const getBioInfo = (e) => (dispatch) => {

    getInfo().then((e) => {
        for(let i = 0; i < e.length;i++){
            dispatch({
                type : 'SET_STATE',
                login : e[i]['username'],
                bio : e[i]['website'],
                name : e[i]['name'],
                email : e[i]['email'],
                phone : e[i]['phone']
            })
        }

    })

}



