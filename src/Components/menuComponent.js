/* eslint-disable react/jsx-no-comment-textnodes */
import React, {Component} from 'react';
//import {} from 'reactstrap';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';  //Instead of using media, we'll use card


class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    //On click on a dish card, we change that dish state from null to dish selected
    onDishSelect(dish){
        this.setState({selectedDish: dish})
    }

    //On selecting a dish, we render its image,title, and description
    renderDish(dish){
        if(dish!= null){
            return(
                <Card>
                   <CardImg width="100%" src={dish.image} alt={dish.name}/> 
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
        else{
            return(
                <div></div>
            );
        }
    }
    render() {
        //Renders list of dishes through Menu component

        const menu= this.props.dishes.map((dish) =>{         //maps each dish onto screen
            return(                                          //col12 mt  means width of whole page(col12) ans margin of 5
                <div key={dish.id} className="col-12 col-md-5 m-1">         
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/> 

                        <CardImgOverlay>
                        
                            <CardTitle>{dish.name}</CardTitle>
                        
                        </CardImgOverlay>

                    </Card>
                </div>
                
            );      //inside div i constructed view of each of the items in my dishes
        });
        return (
            //menu variable used in return scope 

            <div className="container">
                <div className="row">
                        {menu}      
                </div>
                
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}

export default Menu;