import React, { Component } from 'react';
import Backlog from './backlog';
export class View extends Component {
    state = {
        items: [
            {
                "Name": "The Sopranos",
                "Year": "1999",
                "Type": "tv",
                "Thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHOvOq-Ogk4oz6d49RxNbnYRSYug2T8gJ-rcTjokrjoLwtFYtR"
            }
        
         
        ]
    };

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
