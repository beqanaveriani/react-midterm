import React from 'react';
import Flag from "../components/joke/Flag"

let base64 = require('base-64');
let auth = "Basic YmVrYToxMjM0NTY3";

export default class PublicPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {username: '', password: '', authenticated: localStorage.getItem('basicAuth') != null};

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsernameChange(event) {
        this.setState({username: event.target.value, password: this.state.password, authenticated: this.state.authenticated});
    }

    handlePasswordChange(event) {
        this.setState({username: this.state.username, password: event.target.value, authenticated: this.state.authenticated});
    }

    handleSubmit(event) {
        let basicAuth = 'Basic ' + base64.encode(this.state.username + ":" + this.state.password)
        if (basicAuth === auth){
            localStorage.setItem('basicAuth', basicAuth);
            this.setState({username: this.state.username, password: this.state.password, authenticated: true})
        } else {
            alert("Invalid username or password")
        }
        event.preventDefault();
    }

    render() {
        if (!this.state.authenticated){
                return (
                    <div>
                        <form className="authPage" onSubmit={this.handleSubmit}>
                            <label>
                                    Username:
                                    <input type="text" name="username" value={this.state.username} onChange={this.handleUsernameChange} />
                                </label>
                                <label>
                                    Passowrd:
                                    <input type="text" name="password" value={this.state.password} onChange={this.handlePasswordChange}/>
                                </label>
                                <input type="submit" value="Submit" />
                        </form>
                    </div>
            );
        } else {
            return (
                <div className="filters">
                    <Flag />
                </div>
            )
        }
    }
}