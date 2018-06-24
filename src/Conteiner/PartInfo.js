import React from 'react'
import Tab from './PartTabs'
import {connect} from 'react-redux';
import InputInfo from '../components/inputInfo'
import MainInfo from '../components/mainInfo'
import {setContent} from '../actions/actionForBio'

class Lab3 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fol :  false
        };
    }
    render(){
        if(!this.props.store.bioInfo.start){
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
        setBio : () => {dispatch(setContent())},
    })
)(Lab3)