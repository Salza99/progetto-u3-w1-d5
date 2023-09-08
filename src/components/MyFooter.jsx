import { Component } from "react";

class MyFooter extends Component {
  render() {
    return (
      <footer className="container text-secondary">
        <div className="d-flex">
          <i className="bi bi-facebook fs-4 me-4 mb-3"></i>
          <i className="bi bi-instagram fs-4 me-4 mb-3"></i>

          <i className="bi bi-x-lg fs-4 me-4 mb-3"></i>
          <i className="bi bi-youtube fs-4 me-4 mb-3"></i>
        </div>
        <div className="row">
          <div className="col-6 col-md-3">
            <p>Audio and Subtitled</p>

            <p>Media Center</p>

            <p>Privacy</p>

            <p>Contact Us</p>
          </div>
          <div className="col-6 col-md-3">
            <p>Audio Description</p>

            <p>Investor Relations</p>

            <p>Legal Notices</p>
          </div>
          <div className="col-6 col-md-3">
            <p>Help Center</p>

            <p>Jobs</p>

            <p>Cookie Preferences</p>
          </div>
          <div className="col-6 col-md-3">
            <p>Gift Cards</p>

            <p>Terms of Use</p>

            <p>Corporate Informations</p>
          </div>
        </div>
        <div className="d-flex">
          <button type="button" className="btn btn-outline-secondary mb-3">
            Service Code
          </button>
        </div>
        <address className="text-center">&copy 1997-2023 Netflix, Inc.</address>
      </footer>
    );
  }
}
export default MyFooter;
