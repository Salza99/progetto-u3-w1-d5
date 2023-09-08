import { Component } from "react";
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import NetflixLogo from "../assets/netflix_logo.png";
import { Bell } from "react-bootstrap-icons";

class ProfileNav extends Component {
  render() {
    return (
      <Navbar>
        <Container fluid>
          <Nav className="d-flex align-items-center">
            <Navbar.Brand href="#">
              <img style={{ width: "70px" }} src={NetflixLogo} alt="logo" />
            </Navbar.Brand>
          </Nav>
          <Nav className="d-flex align-items-center">
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
          </Nav>
        </Container>
      </Navbar>
    );
  }
}
export default ProfileNav;
