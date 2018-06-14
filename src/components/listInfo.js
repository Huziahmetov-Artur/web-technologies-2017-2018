
import React from 'react'

function ListInfo(props) {
    return(
        <div>
            <h1>List of followers</h1>
            <ul>
                {props.bio.followers}
            </ul>
            <hr />
            <h1>List of repositories</h1>
            <ul>
                {props.bio.repos.map((elem,i) =>
                    <li key={i}>{elem['html_url'].slice(elem['html_url'].lastIndexOf('/') + 1,elem['html_url'].length - 1)}</li>
                )}
            </ul>
        </div>
    )
}
export default ListInfo