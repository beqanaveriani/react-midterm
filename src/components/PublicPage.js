import React from 'react';
import AuthPage from "./AuthPage"
import axios from "axios"

import "./css/PublicPage.css"
import Joke from './joke/Joke';


export default class PublicPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {authenticated: localStorage.getItem('basicAuth') != null, data: {}, loaded: false}
        this.handleCardClick = this.handleCardClick.bind(this);
    }


    handleCardClick(){
        if (!this.state.authenticated){
            alert("Authentication is required");
        } else {
            axios
            .get(`https://sv443.net/jokeapi/v2/joke/Any`)
            .then((response) => {
                this.setState({data: response.data, authenticated: this.state.authenticated, loaded: true});
            })
            .catch(() => {
                console.error('Error');
            });
        }
    }

    render() {
        return (
            <div>
                <div className="cards">
                    <div className="card" style={{backgroundColor: "#1abc9c"}} onClick={this.handleCardClick}>
                        <h1>Any</h1>
                    </div>
                    <div className="card" style={{backgroundColor: "#3498db"}} onClick={this.handleCardClick}>
                        <h1>Programming</h1>
                    </div>
                    <div className="card" style={{backgroundColor: "#e67e22"}} onClick={this.handleCardClick}>
                        <h1>Miscellanaeous</h1>
                    </div>
                    <div className="card" style={{backgroundColor: "#2c3e50"}} onClick={this.handleCardClick}>
                        <h1>Dark</h1>
                    </div>
                </div>
                <AuthPage />
                <Joke data={this.state.data} />
            </div>
        );
    }
}