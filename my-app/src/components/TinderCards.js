import React, { Component } from "react";
import { Card, CardWrapper } from "react-swipeable-cards";
import CardContent from "./Card";

class MarvelCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CardWrapper>
        <Card>
          <CardContent />
        </Card>
      </CardWrapper>
    );
  }
}

export default MarvelCards;
