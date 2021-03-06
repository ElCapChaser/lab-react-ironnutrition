import React from 'react';

class MealBox extends React.Component {
  render() {
    return (
      <div className="media">
        <img
          src={this.props.meal.image}
          className="img-thumbnail mr-3 mw-25 border-0"
          style={{ maxWidth: 150 }}
        />
        <div className="media-body align-self-center">
          <h5 className="mt-0 mb-1">{this.props.meal.name}</h5>
          <small>{this.props.meal.calories}</small>
        </div>
        <form className="row align-self-center">
          <input className="form-control col-9" type="number" value="1" />
          <button className="btn btn-primary col-3">+</button>
        </form>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossorigin="anonymous"
        />
      </div>
    );
  }
}

export default MealBox;
