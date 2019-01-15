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

function EndCard(props) {
  return (
    <div className="text-center pt-2">
      <h1>Stay tuned for more heroes!</h1>
    </div>
  );
}

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
    this.getEndCard = this.getEndCard.bind(this);
  }

  getEndCard() {
    return <EndCard />;
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
    const alertStyle = {
      position: "absolute",
      width: "100%"
    };
    return (
      <div>
        {/* creating alert for every swipe */}
        {this.state.direction === "left" ? (
          <Alert
            className="alert-left text-center"
            color="danger"
            isOpen={this.state.visible}
            style={alertStyle}
          >
            Nope
          </Alert>
        ) : this.state.direction === "right" ? (
          <Alert
            className="alert-right text-center"
            color="success"
            isOpen={this.state.visible}
            style={alertStyle}
          >
            Nice!
          </Alert>
        ) : (
          <Alert
            color="secondary"
            className="alert-default text-center"
            style={alertStyle}
          >
            Welcome to SuperHeroes Tinder.Swipe Left to Reject.Swipe Right to
            Like
          </Alert>
        )}
        {/* tinder cards */}
        <CardWrapper addEndCard={this.getEndCard}>{cardDecks}</CardWrapper>
      </div>
    );
  }
}

export default MarvelCards;
