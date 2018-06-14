import React from 'react'
import store from "../store/Store";
import Tab from './PartTabs'
import {connect} from 'react-redux';
import InputInfo from '../components/inputInfo'
import MainInfo from '../components/mainInfo'
import {getBioInfo} from '../actions/actionForBio'
let count = 0;
function Draw(props) {
    let e = props.info[props.number]
    let t = JSON.parse( localStorage.getItem( 'mas' ) );
    if(e !== -1)
    return <div className={props.close ? 'modalDialog' : 'noe'} >
             <div>
                 <span className='close' onClick={props.click}>X</span>
                <p>Login : <span>{props.info[props.number]['login']}</span></p>
                <p>Website : <span>{props.info[props.number]['bio']}</span></p>
                <p>Email : <span>{props.info[props.number]['email']}</span></p>
                <p onClick={props.click}>Phone : <span>{props.info[props.number]['phone']}</span></p>
            </div>
    </div>
    else return <div className={props.close ? 'modalDialog' : 'noe'} >
        <div>
            <span className='close' onClick={props.click}>X</span>
            <p>Login : <span>{t[localStorage.check]['login']}</span></p>
            <p>Website : <span>{t[localStorage.check]['bio']}</span></p>
            <p>Email : <span>{t[localStorage.check]['email']}</span></p>
            <p onClick={props.click}>Phone : <span>{t[localStorage.check]['phone']}</span></p>
        </div>
    </div>
}
function ls() {
    let t = JSON.parse( localStorage.getItem( 'mas' ) );
    console.log(t);
    if(t && count === 0){
      count = 1;
      store.dispatch({
            type : 'SET_LS',
            LS : t
        });

    }
    else
    console.log('');
}
class Lab3 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fol :  false,
            curretntinfo: -1,
            close : 1
        };
        this.changeState = this.changeState.bind(this);
        this.changeClose = this.changeClose.bind(this);
    }
    changeState(e){
        localStorage.check = e.target.className;
        localStorage.setItem('mas' , JSON.stringify(this.props.store.bioInfo));
        console.log(this.props.store.bioInfo);
        this.setState({
            fol : true,
            curretntinfo : e.target.className,
            close :1
        })
    }
    changeClose(){
        this.setState({
            close : 0
        })
    }
    render(){
        ls();
        console.log(this.props.store.bioInfo)
        let t = JSON.parse( localStorage.getItem( 'mas' ) );
        return (
                <div >
                    <InputInfo find={this.props.setBio}/>
                    {this.props.store.bioInfo[0] ?
                    <ul>
                        {this.props.store.bioInfo.map((a,i) => <li className={i} key={i} onClick={this.changeState}>
                            {a['name']}
                        </li>)}
                    </ul>
                    : t ? <ul>
                            {t.map((a,i) => <li className={i} key={i} onClick={this.changeState}>
                                {a['name']}
                            </li>)}
                        </ul> : null}

                        {this.state.curretntinfo !== -1  ? <Draw click={this.changeClose} close={this.state.close} number={this.state.curretntinfo} info={this.props.store.bioInfo}/> : null}

                </div>

            )
        }

}

export default connect(
    state => ({
        store: state
    }),
    dispatch => ({
        setBio : () => {dispatch(getBioInfo())}
    })
)(Lab3)