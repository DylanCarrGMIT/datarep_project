import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
class Items extends React.Component {

    constructor(){ 
        super();
        this.DeleteItem = this.DeleteItem.bind(this);
    }
    DeleteItem() {
       
    axios.delete("http://localhost:4000/api/items/"+this.props.item._id);
    }
   
    render() {
        return (
            <div>
                
                <Card>
                    <Card.Header>{this.props.item.Name}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.item.Thumbnail} width="200" height="200"></img>
                            <footer>
                                {this.props.item.Year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to = {"/update/"+this.props.item._id} className = "btn btn-primary">Update</Link>
                    <Button className = "btn btn-primary" onClick={this.DeleteItem}>Delete</Button>
                </Card>

            </div>
        );
    }
}
export default Items;
