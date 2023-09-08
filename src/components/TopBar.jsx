import { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import NetflixLogo from "../assets/netflix_logo.png";

class TopBar extends Component {
  render() {
    return (
      <Navbar className="mb-4" expand="lg" variant="dark" sticky="top">
        <Container fluid>
          <Navbar.Brand href="#">
            <img style={{ width: "70px" }} src={NetflixLogo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Tv Shows</Nav.Link>
              <Nav.Link href="#">Movies</Nav.Link>
              <Nav.Link href="#">Recently Added</Nav.Link>
              <Nav.Link href="#">My List</Nav.Link>
            </Nav>
            <Nav className="d-flex">
              <Nav.Link href="#">KIDS</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default TopBar;
