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
    let e = fetchInfo('http://jsonplaceholder.typicode.com/users/');
    return e;
}


export {getInfo}