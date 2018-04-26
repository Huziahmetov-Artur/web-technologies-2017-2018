import React from 'react'
function InputInfo(props) {
    return (
        <div className="inp">
            <input id="pole" type="text"/>
            <input id="button" type="submit" onClick={props.find}/>
        </div>
    )
}
export default InputInfo