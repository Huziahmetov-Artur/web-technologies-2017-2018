import React from "react";
import store from "./Store";

function Tab_head(props) {
    return(
        <div className="tab_head">
            <button value="first" onClick={props.eClick}>Main</button>
            <button value="second" onClick={props.eClick}>Education</button>
            <button value="third" onClick={props.eClick}>Contacts</button>
        </div>
    )
}
function Edit(props) {
    return(
        <div className="Edit">
            <input type="checkbox" value="Edit"  onClick={props.select}/>
            <label>Edit</label>
        </div>
    )
}
function Text_area(props) {
    let a = props.readonly ? "" : "readonly"
    return(
        <textarea id='edit_text' onChange={props.Click}  value={props.info[props.tab]} readOnly={a}/>
    )

}
function  changeCur(e){
    let a = e.target.value
    if(a === 'first'){
        store.dispatch({
            type: 'FIRST_BUTTON',
            content : 0
        });
    }
    if(a === 'second'){
        store.dispatch({
            type: 'SECOND_BUTTON',
            content : 0
        })
    }
    if(a === 'third'){
        store.dispatch({
            type: 'THIRD_BUTTON',
            content : 0
        })
    }
}
function  Main(e){
    let a = e.target.value
    let b = store.getState().TabReducer.currentTab

    if(b === 'first' ){
        store.dispatch({
            type : 'FIRST_BUTTON',
            content : a
        })
    }
    if(b === 'second'){
        store.dispatch({
            type : 'SECOND_BUTTON',
            content : a
        })
    }
    if(b === 'third'){
        store.dispatch({
            type : 'THIRD_BUTTON',
            content : a
        })
    }
}
function changeEdit(){
    store.dispatch({
        type: 'CAN_EDIT'
    })
}
class Tab extends React.Component{
    render(){
        return(
            <div className="part_two">
                <Tab_head eClick={changeCur}/>
                <Edit select={changeEdit}/>
                <Text_area Click={Main}  info={store.getState().TabReducer.main} tab={store.getState().TabReducer.currentTab} readonly={store.getState().TabReducer.canEdit}/>
            </div>
        )
    }
}
export default Tab