import React from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import {Link} from 'react-router-dom';
import Cform from './CommentFormComponent';

function RenderComments({comments}) {
    if (comments != null) {
        return (
            comments.map(comment => {
                    return (
                        <div>
                            <ul className="list-unstyled">
                                <li>
                                    <div className="mb-2 text-left">
                                        <p>{comment.comment}</p>
                                        <p>-- {comment.author}, {comment.date} </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    )
                }
            )
        )
    }
    else
        return (<div></div>)
}

function RenderDish({dish}) {
    if (dish != null)
        return (
            <div className="row">
                <div className="col-md-5 ">
                    <Card className="cardStyle2">
                        <CardImg top src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-md-5">
                    <h4>Comments</h4>
                </div>
            </div>
        );
    else
        return (
            <div></div>
        );
}

const DishDetail = (props) => {
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish}/>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments}/>
                    <Cform/>
                </div>
            </div>

        </div>
    );
}


export default DishDetail;
