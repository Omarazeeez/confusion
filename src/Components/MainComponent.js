import React, {Component} from 'react';
import Menu from './menuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
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
        <Header />
        <Menu dishes={this.state.dishes}
            onClick={(dishId) => this.onDishSelect(dishId)}/>  
        <div>
          {this.state.selectedDish && <DishDetail dish={this.state.dishes.filter((dish)=> dish.id === this.state.selectedDish )[0]} />}
          <Footer />
        </div>
      </div>
      //Menu tag now calls dishes as props whose state was lifted to parent component
    );
  }
  
}

export default Main;