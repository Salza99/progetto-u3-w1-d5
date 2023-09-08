import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Avatar from "../assets/avatar.png";

class ProfilePage extends Component {
  render() {
    return (
      <Container className="text-center text-sm-start">
        <Row>
          <Col xs={12} sm={3}>
            <img className="img-fluid" src={Avatar} alt="profile-image" />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default ProfilePage;
