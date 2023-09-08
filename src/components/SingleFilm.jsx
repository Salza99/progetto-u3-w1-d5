import { Component } from "react";

class SingleFilm extends Component {
  render() {
    return (
      this.props.film && (
        <div className="h-75">
          <img className=" img-fluid h-100" src={this.props.film.Poster} alt="Poster-Film" />
        </div>
      )
    );
  }
}

export default SingleFilm;
