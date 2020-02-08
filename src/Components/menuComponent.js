import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';  //Instead of using media, we'll use card

    function RenderMenuItem({dish, onClick }) {
        return(
            <Card onClick={() => onClick(dish.id)}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        );
    }


    function Menu(props) {

        const menu = props.dishes.map((dish) => {         //maps each dish onto screen
            return (                                          //col12 mt  means width of whole page(col12) ans margin of 5
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <RenderMenuItem dish={dish} onClick={props.onClick} />
                </div>
            );      
        });
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
   
    


export default Menu;