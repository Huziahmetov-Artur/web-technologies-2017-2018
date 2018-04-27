import React from 'react'
import store from "../store/Store";
import Tab from './PartTabs'
import {connect} from 'react-redux';
import InputInfo from '../components/inputInfo'
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
                            <InputInfo find={this.props.setBio}/>
                        <div className='userInfo'>
                            <MainInfo bio={this.props.store.bioInfo}/>
                            <Tab />
                        </div>
                    </div>
                )}
            else {
                return(

                    <div>
                                <InputInfo find={this.props.setBio}/>
                               <MainInfo  bio={this.props.store.bioInfo}/>
                        <div className='userInfo'>
                                <Tab />
                        </div>
                    </div>
                )
            }
        }
        else {
            return (
                <div>
                        <InputInfo find={this.props.setBio}/>
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