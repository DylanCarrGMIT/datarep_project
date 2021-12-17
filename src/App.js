import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
//import { Header } from './components/Header';
import { View } from './components/view';
import { Add } from './components/add';
import {Update} from './components/update';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav} from 'react-bootstrap';
import { BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Navbar bg="primary" variant="dark">
      <Nav className="mr-auto">
      
      <Nav.Link href="/">View Backlog</Nav.Link>
      <Nav.Link href="/add">Add</Nav.Link>
      </Nav>
      </Navbar>
      <br />
      <Switch>
      <Route path='/' component= {View} exact/>
      <Route path='/add' component = {Add} exact/>
      <Route path='/update/:id' component = {Update}/>
      </Switch>
      </div>
      </Router>
      );
    }
    }
    export default App;
