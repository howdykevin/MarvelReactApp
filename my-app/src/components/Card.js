import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import "./Card.css";

class CardContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="box">
        <Card className="content">
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=300"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle className="d-none d-md-block">
              Card subtitle
            </CardSubtitle>
            <CardText className="d-none d-md-block">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button>View Full Profile</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default CardContent;
