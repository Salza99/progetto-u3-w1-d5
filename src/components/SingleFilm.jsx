import { Component } from "react";

class SingleFilm extends Component {
  render() {
    return (
      this.props.film && (
        <div>
          <img className=" img-fluid mb-3 " src={this.props.film.Poster} alt="Poster-Film" />
        </div>
      )
    );
  }
}

export default SingleFilm;
