import React from 'react'

function MainInfo(props) {

    return(
        <div>
            <img src={props.bio.img_url} alt="noPhoto"/>
            <div className="info_center">
                <h1 className="name">{props.bio.name ? props.bio.name : "Name not filled"}</h1>
                <p className="login">{props.bio.login}</p>
                <p className="bio">{props.bio.bio ? props.bio.bio : "Bio not filled"}</p>
                <p className="company">{props.bio.company ? props.bio.company : "Company not filled"}</p>
                <p className="location">{props.bio.location ? props.bio.location : "Location not filled"}</p>
                <p className="email">{props.bio.email ? props.bio.email : "Email not filled"}</p>
                {props.bio.blog ?  <a href="#">{props.bio.blog}</a> : "Blog not filled"}
            </div>
        </div>
    )
}
export default MainInfo