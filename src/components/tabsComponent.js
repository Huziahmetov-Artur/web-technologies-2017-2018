import React from "react";

function TabHead(props) {
    return(
        <div className="tab_head">
            <button value="first" onClick={props.eClick}>Followers</button>
            <button value="second" onClick={props.eClick}>Repositories</button>
            <button value="third" onClick={props.eClick}>None</button>
        </div>
    )
}
export default TabHead