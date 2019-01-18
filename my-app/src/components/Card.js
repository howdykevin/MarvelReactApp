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
import { Link } from "react-router-dom";

class CardContent extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { name, appearance, biography, image, id } = this.props.content;
    const newTo = {
      pathname: `/hero/${id}`
    };
    return (
      <div className="box">
        <Card className="content">
          <CardImg
            top
            width="100%"
            src={image.url}
            alt={name}
            className="portfolio-img"
          />
          <CardBody>
            <CardTitle>
              <h2>
                {name}
                <span role="img" aria-label={biography.alignment}>
                  {biography.alignment === "good"
                    ? "😇"
                    : biography.alignment === "bad"
                    ? "😈"
                    : "😎"}
                </span>
              </h2>
            </CardTitle>
            <CardSubtitle>
              <p className="mb-1">Race:&nbsp;{appearance.race}</p>
              <p>Gender:&nbsp;{appearance.gender}</p>
            </CardSubtitle>
            <CardText>Published by:&nbsp;{biography.publisher}</CardText>
            <Link to={newTo}>
              <Button color="primary">View Full Profile</Button>
            </Link>
          </CardBody>
        </Card>
        {/* <Route path="/hero" component={Hero} /> */}
      </div>
    );
  }
}

export default CardContent;
// { "/hero/" + id }
