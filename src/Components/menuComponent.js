import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';  //Instead of using media, we'll use card


class Menu extends Component {

    constructor(props) {
        super(props);

    }

    //On click on a dish card, we change that dish state from null to dish selected

    //On selecting a dish, we render its image,title, and description
    render() {
        //Renders list of dishes through Menu component
        const menu = this.props.dishes.map((dish) => {         //maps each dish onto screen
            return (                                          //col12 mt  means width of whole page(col12) ans margin of 5
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.props.onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
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
            </div>
        );
    }
}

export default Menu;