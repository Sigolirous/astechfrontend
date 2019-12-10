import React from 'react';
import API from '../../services/api'
import DashBoard from './inDash'
export default class dshHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: undefined,
            password: undefined,
            logged:false
         }
        this.onChange = (e) => {
            const cState = Object.assign({}, this.state)
            const field = e.target.id
            cState[field] = e.target.value
            this.setState(cState)
        }
        this.handleSubmit = (e)=>{
            API.post('asloginsys', this.state).then((res)=>{
                if(!res.data.token){
                    alert('The login nor password are wrong')
                }else{
                    document.cookie = `${res.data.token}`
                    this.setState({logged:true})
                    alert('Logged In')
                }
            })
            e.preventDefault();
        }
    }
    render() {
        if(this.state.logged === false){
            return ( 
                <div className='loginForm'>
                    <form>
                        Username:
                        <input type="text" id="username" onChange={this.onChange}/><br/>
                        Password:
                        <input type="password" id="password" onChange={this.onChange}/><br/>
                        <input type="button" onClick={this.handleSubmit} value="Login"/>
                    </form>
                </div>
             );
        }else{
            return(
                <DashBoard/>
            )
        }
    }
}
 