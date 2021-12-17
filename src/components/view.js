import React, { Component } from 'react';
import Backlog from './backlog';
import axios from 'axios';
export class View extends Component {
    state = { items: [] }
    componentDidMount() {
        axios.get('http://localhost:4000/api/items')
            .then(response => {
                this.setState({ items: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    render() {
        return (
            <div className="App">
                <h1>Your Backlog!</h1>
                <Backlog items={this.state.items}></Backlog>

            </div>
        );
    }
}
export default View;
