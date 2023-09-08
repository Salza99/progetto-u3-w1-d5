import { Component } from "react";
import { Button, Container, Dropdown, Form, Row } from "react-bootstrap";
import NowInTendency from "./NowInTendecy";
import WatchAgain from "./WatchAgain";
import NewRelease from "./NewRelease";

class HomePage extends Component {
  state = {
    firstGallery: "",
    secondGallery: "",
    thirdGallery: "",
  };
  async componentDidMount() {
    try {
      const firstResponse = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=f1d3a0a6&s=hunger%20games");
      const firstData = await firstResponse.json();
      this.setState({ firstGallery: firstData });
      const secondResponse = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=f1d3a0a6&s=fast%20and%20furious");
      const secondData = await secondResponse.json();
      this.setState({ secondGallery: secondData });
      const thirdResponse = await fetch(
        "http://www.omdbapi.com/?i=tt3896198&apikey=f1d3a0a6&s=the%20chronicles%20of%20narnia"
      );
      const thirdData = await thirdResponse.json();
      this.setState({ thirdGallery: thirdData });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    return (
      <div className="bg-dark">
        <Container fluid>
          <div className="d-flex align-items-center mb-4">
            <h1 className="text-white m-0 me-5">TV SHOWS</h1>
            <Dropdown>
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                Generi
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Commedia</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Dramma</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Documentari</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div>
            <h2 className="text-white">Ora in tendenza</h2>

            <NowInTendency film={this.state.firstGallery} />
          </div>
          <div>
            <h2 className="text-white">Guarda di nuovo</h2>
            <WatchAgain film={this.state.secondGallery} />
          </div>
          <div>
            <h2 className="text-white">Nuovi</h2>
            <NewRelease film={this.state.thirdGallery} />
          </div>
        </Container>
      </div>
    );
  }
}

export default HomePage;