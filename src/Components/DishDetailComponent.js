import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardBody } from 'reactstrap';
    
    function RenderComments({comments}) {
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

    function RenderDish({dish}) {
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
    const DishDetail = (props) =>{
        return (
            <div className="container">
                <div>               
                    <RenderDish dish={props.dish} />
                    <h4>Comments</h4>
                    <RenderComments comments= {props.dish.comments} />              
                </div>
            </div>
            
        );
    }

export default DishDetail;