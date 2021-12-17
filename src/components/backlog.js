import React from 'react';
import '../App.css';
import Items from './items';
class Backlog extends React.Component {
    render() {
        return this.props.items.map((item) => {
            return <Items item={ item }> </Items>
            
        });
    }
}
export default Backlog;