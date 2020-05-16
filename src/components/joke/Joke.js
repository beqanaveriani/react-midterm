import React from 'react';



export default class Joke extends React.Component {

    constructor(props) {
        super(props);
        this.state = {type: props.data.type, data: props.data}
        console.log(this.state)
    }


    render() {
        if (this.state.type === "twopart"){
            return (
                <div>
                    <h1>{this.state.data.setup}</h1>
                    <h1>{this.state.data.delivery}</h1>
                </div>
            );
        } else {
            return (
                <div>
                    <h1>{this.state.joke}</h1>
                </div>
            );
        }
       
    }
}