import React from 'react'
import store from "./Store";
import Tab from './PartTabs'

function Input_info(props) {
    return (
        <div className="inp">
            <input id="pole" type="text"/>
            <input id="button" type="submit" onClick={props.find}/>
        </div>
    )
}
function FetchInfo(a) {
    let mainInfo;
    mainInfo = fetch(a).then(responce => {
        if(responce.status >= 200 && responce.status < 400)
            return responce.json()
        else console.log('err')
    }).catch(err => console.log('what?',err))
    return  mainInfo
}
async function  handClick(){
    let a = document.getElementById('pole');
    let e = await FetchInfo(`https://api.github.com/users/${a.value}`);
    let f = await FetchInfo(`https://api.github.com/users/${a.value}/followers`);
    let r = await FetchInfo(`https://api.github.com/users/${a.value}/repos`);
    // r.map(w => console.log(w['login']));
    store.dispatch({
        type : 'SET_STATE',
        login : e['login'],
        img_url : e['avatar_url'],
        bio : e['bio'],
        name : e['name'],
        company : e['company'],
        location : e['location'],
        email : e['email'],
        blog : e['blog'],
        followers : f,
        repos : r
    })
}
class Lab3 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            fol :  false
        };
    }
    render(){
        console.log(store.getState())
        if(!store.getState().bioInfo.start){
            if(!this.state.fol){
                return(
                    <div>
                        <div className="info">
                            <Input_info find={handClick}/>
                            <input id="button" type="submit" onClick={() => this.setState(prev => ({fol : !prev.fol}))} value="Show more"/>
                            <img src={store.getState().bioInfo.img_url}/>
                            <div className="info_center">
                                <h1 className="name">{store.getState().bioInfo.name ? store.getState().bioInfo.name : "Name not filled"}</h1>
                                <p className="login">{store.getState().bioInfo.login}</p>
                                <p className="bio">{store.getState().bioInfo.bio ? store.getState().bioInfo.bio : "Bio not filled"}</p>
                                <p className="company">{store.getState().bioInfo.company ? store.getState().bioInfo.company : "Company not filled"}</p>
                                <p className="location">{store.getState().bioInfo.location ? store.getState().bioInfo.location : "Location not filled"}</p>
                                <p className="email">{store.getState().bioInfo.email ? store.getState().bioInfo.email : "Email not filled"}</p>
                                {store.getState().bioInfo.blog ?  <a href="#">{store.getState().bioInfo.blog}</a> : "Blog not filled"}
                            </div>
                        </div>
                        <Tab />
                    </div>
                )}
            else {
                return(
                    <div>
                        <div className="info">
                            <div className="info">
                                <Input_info find={this.handClick}/>
                                <input id="button" type="submit" onClick={() => this.setState(prev => ({fol : !prev.fol}))} value="Show more"/>
                                <img src={store.getState().bioInfo.img_url}/>
                                <div className="info_center">
                                    <h1 className="name">{store.getState().bioInfo.name ? store.getState().bioInfo.name : "Name not filled"}</h1>
                                    <p className="login">{store.getState().bioInfo.login}</p>
                                    <p className="bio">{store.getState().bioInfo.bio ? store.getState().bioInfo.bio : "Bio not filled"}</p>
                                    <p className="company">{store.getState().bioInfo.company ? store.getState().bioInfo.company : "Company not filled"}</p>
                                    <p className="location">{store.getState().bioInfo.location ? store.getState().bioInfo.location : "Location not filled"}</p>
                                    <p className="email">{store.getState().bioInfo.email ? store.getState().bioInfo.email : "Email not filled"}</p>
                                    {store.getState().bioInfo.blog ?  <a href="#">{store.getState().bioInfo.blog}</a> : "Blog not filled"}
                                </div>
                            </div>
                            <h1>List of followers</h1>
                            <ul>
                                {store.getState().bioInfo.followers.map(elem =>
                                    <li>{elem['login']}</li>
                                )}
                            </ul>
                            <hr />
                            <h1>List of repositories</h1>
                            <ul>
                                {store.getState().bioInfo.repos.map(elem =>
                                    <li>{elem['html_url'].slice(elem['html_url'].lastIndexOf('/') + 1,elem['html_url'].length - 1)}</li>
                                )}
                            </ul>
                        </div>
                        <Tab />
                    </div>)
            }
        }
        else {
            return (
                <div>
                    <div className="info">
                        <Input_info find={handClick}/>

                    </div>
                    <Tab />
                </div>
            )
        }
    }
}

export default Lab3