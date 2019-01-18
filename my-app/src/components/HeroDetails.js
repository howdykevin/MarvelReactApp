import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "./HeroDetails.css";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";

// have allow-control-allow-cross origin plugin and open chrome in --ignore-certification-errors, chrome //--ignore-certificate-errors. window key+R

class HeroData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      portfolio: ""
    };
    this.getData = this.getData.bind(this);
    this.controller = new AbortController();
  }

  getData() {
    fetch(
      `https://superheroapi.com/api/312492219266947/${
        this.props.match.params.value
      }`,
      { signal: this.controller.signal }
    )
      .then(Response => Response.json())
      .then(data => {
        console.log(data);
        this.setState({
          portfolio: data,
          loading: false
        });
      })
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.getData();
    console.log(this.props.location);
  }

  componentWillUnmount() {
    this.controller.abort();
  }

  render() {
    const { loading } = this.state;
    const {
      name,
      appearance,
      biography,
      image,
      powerstats,
      work
    } = this.state.portfolio;
    const backTo = { pathname: "/" };
    return (
      <div>
        {loading ? (
          <div className="text-white text-center mt-5">
            <h2>Loading...</h2>
          </div>
        ) : (
          <Container fluid={true} className="mt-3 mt-xl-0">
            {/* image and appearance desc includes biography and powerstats */}
            <Row>
              <Col xs="12" sm="8" md="12" lg="5" className="details">
                <img className="w-100 img-fluid" src={image.url} alt={name} />
              </Col>
              <Col xs="12" sm="4" md="12" lg="7" className="details">
                <h1>{name}</h1>
                <Table responsive>
                  <tbody>
                    <tr>
                      <th>Gender:</th>
                      <td>{appearance.gender}</td>
                    </tr>
                    <tr>
                      <th>Race:</th>
                      <td>{appearance.race}</td>
                    </tr>
                    <tr>
                      <th>Place-of-Birth:</th>
                      <td>
                        {biography["place-of-birth"] === "-"
                          ? "Unknown"
                          : biography["place-of-birth"]}
                      </td>
                    </tr>
                    <tr>
                      <th> Eye &amp; Hair Color:</th>
                      <td>
                        {appearance["eye-color"] === "-"
                          ? "Unknown"
                          : appearance["eye-color"]}
                        ,
                        {appearance["hair-color"] === "-"
                          ? "Unknown"
                          : appearance["hair-color"]}
                      </td>
                    </tr>
                    <tr>
                      <th> Weight &amp; Height:</th>
                      <td>
                        {appearance.weight[1] === "0 kg"
                          ? "Unknown"
                          : appearance.weight[1]}
                        ,
                        {appearance.height[1] === "0 cm"
                          ? "Unknown"
                          : appearance.height[1]}
                      </td>
                    </tr>
                    <tr>
                      <th>PowerStats</th>
                      <td>
                        <p>Combat:&nbsp;{powerstats.combat}</p>
                        <p>Durability:&nbsp;{powerstats.durability}</p>
                        <p>Intelligence:&nbsp;{powerstats.intelligence}</p>
                        <p>Power:&nbsp;{powerstats.power}</p>
                        <p>Speed:&nbsp;{powerstats.speed}</p>
                        <p>Strength:&nbsp;{powerstats.strength}</p>
                      </td>
                    </tr>
                    <tr>
                      <th>Hobby/Occupation:</th>
                      <td>
                        {work.occupation === "-" ? "Unknown" : work.occupation}
                      </td>
                    </tr>
                    <tr>
                      <th>Publisher:</th>
                      <td>By&nbsp;{biography.publisher}</td>
                    </tr>
                    <tr>
                      <th>First-Apperance:</th>
                      <td>
                        {/* <ul>
                          {biography["first-appearance"].map((item, index) => {
                            return <li key={index}>item</li>;
                          })}
                        </ul> */}
                        {biography["first-appearance"]}
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <Link to={backTo}>
                  <Button className="ml-2 mt-2 mb-2" size="lg" color="info">
                    Back
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>
        )}
      </div>
    );
  }
}

export default HeroData;
