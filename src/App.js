import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Components/menuComponent';
import {DISHES} from './shared/dishes';

class App extends Component{

  constructor(props) {
    super(props);

    this.state= {
      dishes:DISHES //dishes.js file
    };
  }
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Fusion Restaurant</NavbarBrand>
          </div>
        </Navbar>
  
        <Menu dishes={this.state.dishes}/>  
      </div>
      //Menu tag now calls dishes as props whose state was lifted to parent component
    );
  }
  
}

export default App;
