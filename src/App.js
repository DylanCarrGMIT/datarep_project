import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
//import { Header } from './components/Header';
import { Content } from './components/content';
//import { Footer } from './components/Footer';
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
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/read">Read</Nav.Link>
      <Nav.Link href="/create">Create</Nav.Link>
      </Nav>
      </Navbar>
      <br />
      <Switch>
      <Route path='/' component= {Content} exact/>
      </Switch>
      </div>
      </Router>
      );
    }
    }
    export default App;
