import React from "react";
function TextArea(props) {
    let e = props.tab.tabReducer.currentTab
    if(e === 'first')
        return( <div id='edit_text' >
            {props.tab.bioInfo.followers.map((e,i) => <li key={i}>{e}</li>)}
                </div>);
    if(e === 'second')
        return( <div id='edit_text' >
            {props.tab.bioInfo.repos.map((e,i) => <li key={i}>{e}</li>)}
                </div>);
    if(e === 'third' || e == 0)
        return( <li>Select button</li>)
}
export default TextArea