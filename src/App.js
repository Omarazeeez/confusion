import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Components/menuComponent';
function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Fusion Restaurant</NavbarBrand>
        </div>
      </Navbar>

      <Menu />
    </div>
  );
}

export default App;
