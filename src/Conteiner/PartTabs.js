import React from "react";
import {connect} from 'react-redux';
import {changeEdit, setButton, setContent} from '../actions/actionForTabs'
import TextArea from '../components/textArea'
import TabHead from '../components/tabsComponent'

class Tab extends React.Component{
    render(){
        return(
            <div className="part_two">
                <TabHead eClick={this.props.setButton}/>
                <TextArea Click={this.props.setContent}  info={this.props.store.tabReducer.main} tab={this.props.store} readonly={this.props.store.tabReducer.canEdit}/>
            </div>

        )
    }
}

export default connect(
    state => ({
        store : state,
    }
    ),
    dispatch => ({
        setButton :  (e) => {
            dispatch(setButton(e))
        },
        setContent :  (e) => {
            dispatch(setContent(e))
        },
        changeEdit : () => {
            dispatch(changeEdit())
        }
    })
)(Tab)