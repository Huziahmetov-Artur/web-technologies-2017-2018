const root = document.getElementById('add_in')
const tex = document.getElementById('pole')
const sub = document.getElementById('button')
function Full_tag(text,href,bio,nam,com,loc,em,soc) {

    let t = document.createElement('p')
    t.innerText = text;
    let i = document.createElement("img")
    i.setAttribute("src",href)
    let c =document.createElement("p")
    c.innerText =  bio
    let n = document.createElement("h2")
    n.innerText = nam
    let co = document.createElement('p')
    co.innerText = com;
    let l = document.createElement('p')
    l.innerText = loc;
    let e = document.createElement('p')
    e.innerText = em;
    let s = document.createElement('p')
    s.innerText = soc;


    let p  = document.createElement("div")
    p.appendChild(i)
    p.appendChild(n)
    p.appendChild(t)
    p.appendChild(c)
    p.appendChild(co)
    p.appendChild(l)
    p.appendChild(e)
    p.appendChild(s)

    return p
}
function Er() {
    let p = document.createElement("h1")
    p.innerText = 'No user with this login'
    return p
}
function test() {
    if(add_in.firstChild)
        add_in.innerHTML = ''
    fetch(`https://api.github.com/users/${tex.value}`).then(response => {
        if (response.status >= 200 && response.status < 400) {
            return response.json()
        } else add_in.appendChild(Er())
    }).then(user => {
        add_in.appendChild(Full_tag(user['login'],user['avatar_url'],user['bio'],user['name'],user['company'],user['location'],user['email'],user['blog']))})
}
sub.addEventListener('click',test)
