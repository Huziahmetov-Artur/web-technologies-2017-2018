import { call, put, takeEvery } from 'redux-saga/effects';
import {getFollowers, getRepos, getInfo} from "../actions/GitApi";

const fetchSuccesUser = (e) => {
    return {
        type : 'SET_STATE',
        login : e['login'],
        img_url : e['avatar_url'],
        bio : e['bio'],
        name : e['name'],
        company : e['company'],
        location : e['location'],
        email : e['email'],
        blog : e['blog']
    }
};
const fetchSuccessFollowers = (e) => {
    return {
        type : 'SET_FOLLOWERS',
        followers : e.map(elem =>  elem['login'])
    }
};
const fetchSuccessRepos = (e) => {
    return {
        type : 'SET_REPOS',
        repos : e.map(elem => elem['html_url'].slice(elem['html_url'].lastIndexOf('/') + 1,elem['html_url'].length - 1))
    }
};


function *fetchUser() {

    try {
        let data = yield call(() => getInfo());
        yield put(fetchSuccesUser(data));
        data = yield call(() => getFollowers());
        yield put(fetchSuccessFollowers(data));
        data = yield call(() => getRepos());
        yield put(fetchSuccessRepos(data))

    } catch (e) {
        yield put({type: 'GET_ERROR', isError: true, errName: 'no such user'})
    }
}



export default function* sagasWatcher() {
    yield takeEvery("SET_STATEE", fetchUser);
}
