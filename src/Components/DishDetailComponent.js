import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardText, CardBody } from 'reactstrap';
class DishDetail extends Component {



    componentDidMount(){
        console.log('Menu component did mount')
    }

    componentDidUpdate(){
        console.log('Dishdetail updated!')
    }
    
    renderComments(comments) {
        if (comments != null) {
            return comments.map((comment) => {
                return (
                    <div key={comment.id} className="row">
                        <div className="col-12 col-md-5 m-1 ">
                            <div>                              
                                <p>{comment.comment}</p>
                                <p>--{comment.author}</p>
                                <p>{new Intl.DateTimeFormat('en-US',{year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                            </div>
                        </div>
                    </div>    
                );
            });
        }
        else {
            return (
                <div></div>
            );
        }
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg width="100%" src={dish.image} alt={dish.name} />
                                <CardBody>
                                    <CardTitle>{dish.name}</CardTitle>
                                    <CardText>{dish.description}</CardText>
                                </CardBody>
                            </Card>   
                    </div> 
                </div>       
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }
    render() {

        console.log('Render invoked')
        const { dish } = this.props;
        const { comments } = dish;
        return (
            <div className="container">
                <div>               
                    {this.renderDish(dish)}
                    <h4>Comments</h4>
                    {this.renderComments(comments)}                
                </div>
            </div>
            
        );
    }
}

export default DishDetail;