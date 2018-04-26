import React from 'react'
import store from "../store/Store";
import Tab from './PartTabs'
import {connect} from 'react-redux';
import InputInfo from '../components/inputInfo'
import ListInfo from '../components/listInfo'
import MainInfo from '../components/mainInfo'
import {getBioInfo} from '../actions/actionForBio'

class Lab3 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fol :  false
        };
    }
    render(){
        if(!store.getState().bioInfo.start){
            if(!this.state.fol){
                return(

                    <div>
                        <div className="info">
                            <InputInfo find={this.props.setBio}/>
                            <MainInfo bio={this.props.store.bioInfo}/>
                        </div>
                        <Tab />
                    </div>
                )}
            else {
                return(

                    <div>
                        <div className="info">
                            <div className="info">
                                <InputInfo find={this.props.setBio}/>
                               <MainInfo  bio={this.props.store.bioInfo}/>
                            </div>
                            <ListInfo bio={this.props.store.bioInfo}/>
                        </div>
                        <Tab />
                    </div>
                )
            }
        }
        else {
            return (
                <div>
                    <div className="info">
                        <InputInfo find={this.props.setBio}/>
                    </div>

                </div>

            )
        }
    }
}

export default connect(
    state => ({
        store: state
    }),
    dispatch => ({
        setBio : () => {dispatch(getBioInfo())},
    })
)(Lab3)