import React from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
} from 'reactstrap';

function RenderComments({comments}) {
    if (comments != null) {
        return comments.map(comment => {
                return (<ul className="list-unstyled">
                    <li>
                        <div className="mb-2 text-left">
                            <p>{comment.comment}</p>
                            <p>-- {comment.author}, {comment.date} </p>
                        </div>
                    </li>
                </ul>)
            }
        )
    } else
        return (<div></div>)
}

function RenderDish({dish}) {
    if (dish != null)
        return (
            <div className="row">
                <div className="col-md-7 ">
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
                    <RenderComments comments={dish.comments}/>
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
        <RenderDish dish={props.dish}/>
    );
}


export default DishDetail;
