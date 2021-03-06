import React, { Component } from "react";
import { Card, CardWrapper } from "react-swipeable-cards";
import CardContent from "./Card";
import { Alert } from "reactstrap";
import "./TinderCards.css";
import axios from "axios";
import key from "../secret";

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
      visible: true,
      heroes: [],
      loading: true,
      count: 0
    };
    this.onSwipeLeft = this.onSwipeLeft.bind(this);
    this.onSwipeRight = this.onSwipeRight.bind(this);
    this.removeAlert = this.removeAlert.bind(this);
    this.getEndCard = this.getEndCard.bind(this);
    this.getData = this.getData.bind(this);
    this.onSetResult = this.onSetResult.bind(this);
    //id of heroes that are going to be displayed
    this.heroes = [
      1,
      38,
      30,
      64,
      75,
      60,
      149,
      98,
      70,
      103,
      213,
      122,
      687,
      655,
      157,
      620,
      332,
      346,
      390,
      201
    ];
  }

  getData() {
    // check whether there are any cached value
    const cachedHits = sessionStorage.getItem("hero");
    if (cachedHits) {
      let heroData = JSON.parse(cachedHits);
      this.setState({
        heroes: [...heroData],
        loading: false
      });
      return;
    }
    // if there are no cached values, fetch api
    const promises = this.heroes.map(item => {
      return axios
        .get(`https://superheroapi.com/api.php/${key}/${item}`)
        .then(response => response.data);
    });

    Promise.all(promises).then(data => {
      const heroesData = data.map(item => item);
      console.log(heroesData);
      this.setState({
        heroes: [...heroesData],
        loading: false
      });
    });
  }
  // saving herodata into sessionStorage so that api is not fetch everytime user hits //back from profile page
  onSetResult = (key, result) => {
    sessionStorage.setItem(key, JSON.stringify(result));
    this.setState({
      heroes: [...result],
      loading: false
    });
  };

  componentDidMount() {
    this.mounted = true;
    if (this.mounted) {
      this.getData();
    }
  }

  componentWillUnmount() {
    this.mounted = false;
    this.onSetResult("hero", this.state.heroes.splice(this.state.count));
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
        direction: "left",
        count: this.state.count + 1
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
        direction: "right",
        count: this.state.count + 1
      },
      () => {
        this.removeAlert();
        this.setState({ visible: true });
      }
    );
  }

  render() {
    const { loading, heroes } = this.state;
    const cardDecks = heroes.map(item => {
      return (
        <Card
          onSwipeLeft={this.onSwipeLeft}
          onSwipeRight={this.onSwipeRight}
          onDoubleTap={this.onDoubleTap}
          key={item.id}
          style={{ overflowY: "auto" }}
        >
          <CardContent content={item} />
        </Card>
      );
    });
    const alertStyle = {
      position: "absolute",
      width: "100%",
      zIndex: "2"
    };
    return (
      <div>
        {loading ? (
          <div className="text-white text-center mt-5">
            <h2>Loading...</h2>
          </div>
        ) : (
          <div className="tinder">
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
                Welcome to SuperHeroes Tinder!Swipe Left to Reject
                <span role="img" aria-label="thumbs-down">
                  "👎"
                </span>
                .Swipe Right to Like
                <span role="img" aria-label="like">
                  "😍"
                </span>
              </Alert>
            )}
            {/* tinder cards */}
            <CardWrapper addEndCard={this.getEndCard}>{cardDecks}</CardWrapper>
            <p className="text-center text-white">
              Data attributed by TheSuperHeroApi
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default MarvelCards;
