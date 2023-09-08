import { Component } from "react";
import { Container, Dropdown, Nav, NavLink, Navbar } from "react-bootstrap";
import NetflixLogo from "../assets/netflix_logo.png";
import { Search, Bell } from "react-bootstrap-icons";
import Avatar from "../assets/avatar.png";

class TopBar extends Component {
  render() {
    return (
      <Navbar className="mb-2" expand="lg" variant="dark" sticky="top">
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
            <Nav className="d-flex align-items-center">
              <Nav.Link className="d-none d-lg-inline-block" href="#">
                <Search />
              </Nav.Link>
              <Nav.Link className="d-none d-lg-inline-block" href="#">
                KIDS
              </Nav.Link>
              <Dropdown className="d-none d-lg-inline-block" drop="start">
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                  <Bell />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>Non ci sono notifiche</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Item>
                <NavLink href="#">
                  <img
                    className="d-none d-lg-inline-block rounded"
                    style={{ width: "40px" }}
                    src={Avatar}
                    alt="avatar"
                  />
                </NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default TopBar;
