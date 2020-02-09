import React, {Component} from 'react';
import Menu from './menuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {Switch, Route, Redirect} from 'react-router-dom';
import {DISHES} from '../shared/dishes';
import DishDetail from './DishDetailComponent';


class Main extends Component{

  constructor(props) {
    super(props);

    this.state= {
      dishes:DISHES, //dishes.js file
    };
  }

  render() {

    const HomePage= () => {
      return(
        <Home />
      );
    }
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component ={() => <Menu dishes={this.state.dishes} />} />
          <Redirect to="/home" />
        </Switch>
        <div>
          <Footer />
        </div>
      </div>
      //Menu tag now calls dishes as props whose state was lifted to parent component
    );
  }
  
}



export default Main;