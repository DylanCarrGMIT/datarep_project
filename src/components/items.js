import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card'
class Items extends React.Component {

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
                </Card>

            </div>
        );
    }
}
export default Items;
