import React from 'react';
import axios from 'axios';
export class Add extends React.Component {
    constructor() {
        super();
        this.onChangeItemName = this.onChangeItemName.bind(this);
        this.onChangeItemYear = this.onChangeItemYear.bind(this);
        this.onChangeItemThumbnail = this.onChangeItemThumbnail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            Name: '',
            Year: '',
            Thumbnail: ''
        }
    }
    onChangeItemName(e) {
        this.setState({
            Name: e.target.value
        });
    }
    onChangeItemYear(e) {
        this.setState({
            Year: e.target.value
        })
    }
    onChangeItemThumbnail(e) {
        this.setState({
            Thumbnail: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        console.log(`button clicked
        ${this.state.Name},
        ${this.state.Year},
        ${this.state.Thumbnail}`);
        this.setState({
            Name: " ",
            Year: "",
            Thumbnail: " "
         })
         const newItem = {
            Name: this.state.Name,
            Year: this.state.Year,
            Thumbnail: this.state.Thumbnail
        };
        axios.post('http://localhost:4000/api/items', newItem)
        .then(res => console.log(res.data));
    }
    
    render() {
        return (
            <div className="App">
                <h2>This is the Create component.</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Item Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Name}
                            onChange={this.onChangeItemName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Release Year: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Year}
                            onChange={this.onChangeItemYear}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Thumbnail Url: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Thumbnail}
                            onChange={this.onChangeItemThumbnail}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Item" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
    
}

