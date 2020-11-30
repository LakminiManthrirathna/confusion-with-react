import React, {Component} from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
} from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderComments(comments) {
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

    renderDish(dish) {
        if (dish != null)
            return (
                <div className="row">
                    <div className="col-md-7">
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name}/>
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-md-5">
                        <h4>Comments</h4>
                        {this.renderComments(dish.comments)};
                    </div>
                </div>
            );
        else
            return (
                <div></div>
            );
    }

    render() {
        const dish = this.props.dish;
        return (this.renderDish(dish));
    }
}

export default DishDetail;
