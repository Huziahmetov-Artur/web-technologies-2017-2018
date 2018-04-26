function fetchInfo(a) {
    let mainInfo;
    mainInfo = fetch(a).then(responce => {
        if(responce.status >= 200 && responce.status < 400)
            return responce.json()
        else console.log('err')
    }).catch(err => console.log('what?',err))
    return  mainInfo
}

function getInfo() {
    let a = document.getElementById('pole') ? document.getElementById('pole') : 'artur';
    let e = fetchInfo(`https://api.github.com/users/${a.value}`);return e
}

function getFollowers() {
    let a = document.getElementById('pole') ? document.getElementById('pole') : 'artur';
    return fetchInfo(`https://api.github.com/users/${a.value}/followers`).then((res) => {
        return res
    })
}

function getRepos() {
    let a = document.getElementById('pole') ? document.getElementById('pole') : 'artur';
    return fetchInfo(`https://api.github.com/users/${a.value}/repos`).then((res) => {
        return res
    })
}

export {getFollowers,getInfo,getRepos}