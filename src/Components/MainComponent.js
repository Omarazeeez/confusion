import React, {Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './menuComponent';
import {DISHES} from '../shared/dishes';
import DishDetail from './DishDetailComponent';


class Main extends Component{

  constructor(props) {
    super(props);

    this.state= {
      dishes:DISHES, //dishes.js file
      selectedDish: null
    };
  }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId })
    }
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Fusion Restaurant</NavbarBrand>
          </div>
        </Navbar>
  
        <Menu dishes={this.state.dishes}
            onClick={(dishId) => this.onDishSelect(dishId)}/>  
        <div>
            {this.state.selectedDish && <DishDetail dish={this.state.dishes.filter((dish)=> dish.id === this.state.selectedDish )[0]} />}
        </div>
      </div>
      //Menu tag now calls dishes as props whose state was lifted to parent component
    );
  }
  
}

export default Main;