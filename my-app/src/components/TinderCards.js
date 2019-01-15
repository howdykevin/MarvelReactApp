import React, { Component } from "react";
import { Card, CardWrapper } from "react-swipeable-cards";
import CardContent from "./Card";
import { Alert } from "reactstrap";
import "./TinderCards.css";

const data = [
  { id: 1, name: "First" },
  { id: 2, name: "Second" },
  { id: 3, name: "third" },
  { id: 4, name: "fourth" }
];

class MarvelCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      direction: "",
      visible: true
    };
    this.onSwipeLeft = this.onSwipeLeft.bind(this);
    this.onSwipeRight = this.onSwipeRight.bind(this);
    this.removeAlert = this.removeAlert.bind(this);
    this.onDoubleTap = this.onDoubleTap.bind(this);
  }

  removeAlert() {
    setTimeout(() => {
      this.setState({
        visible: false
      });
    }, 2000);
  }

  onSwipeLeft(data) {
    console.log("Swipe Left");
    this.setState(
      {
        direction: "left"
      },
      () => {
        this.removeAlert();
        this.setState({ visible: true });
      }
    );
  }

  onSwipeRight(data) {
    console.log("Swipe Right");
    // this.getAlerts("Right");
    this.setState(
      {
        direction: "right"
      },
      () => {
        this.removeAlert();
        this.setState({ visible: true });
      }
    );
  }

  onDoubleTap(data) {
    console.log("Double Tapped");
  }

  render() {
    const cardDecks = data.map(item => {
      return (
        <Card
          onSwipeLeft={this.onSwipeLeft}
          onSwipeRight={this.onSwipeRight}
          onDoubleTap={this.onDoubleTap}
          key={item.id}
        >
          <CardContent title={item.name} />
        </Card>
      );
    });
    return (
      <div>
        {/* creating alert for every swipe */}
        {this.state.direction === "left" ? (
          <Alert
            className="alert-left text-center"
            color="danger"
            isOpen={this.state.visible}
          >
            Nope
          </Alert>
        ) : this.state.direction === "right" ? (
          <Alert
            className="alert-right text-center"
            color="success"
            isOpen={this.state.visible}
          >
            Nice!
          </Alert>
        ) : null}
        {/* tinder cards */}
        <CardWrapper>{cardDecks}</CardWrapper>
      </div>
    );
  }
}

export default MarvelCards;
