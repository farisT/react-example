import React from 'react';
import Nav from '../../components/Nav'

export default class LoginForm extends React.Component {
    constructor(){
        super()
        this.state = {
            email: "",
            password: "",
            redirectToReferrer: false
          };
          this.handleChange = this.handleChange.bind(this);
    }


handleChange(event){
    this.setState({
        [event.target.name]: event.target.value,
    })
}
    render(){
        
        return(
            <div className="login">
                <Nav/>
                <h4>This is the login page</h4>
                <form className="login-form">
                    <input type="text" name="email"  value={this.state.email} onChange={this.handleChange}/>
                    <input type="password"  name="password"  value={this.state.password} onChange={this.handleChange}/>
                    <input type="submit" />
                </form>
            </div>
        )
    };
}
