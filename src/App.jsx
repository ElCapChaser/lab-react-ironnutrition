import React, { Component } from 'react';
import './App.scss';
import MealBox from './Components/MealBox';
import meals from './meals.json';
import NewMeal from './Components/NewMeal';
import SearchBar from './Components/SearchBar';

class App extends Component {
  state = {
    active: false,
    meal: meals
  };

  toggleForm = () => {
    this.setState({
      active: !this.state.active
    });
  };

  createNewMeal = (meal) => {
    console.log(meal);
    this.setState({
      meal: [meal, ...this.state.meal]
    });
    this.toggleForm();
  };

  render() {
    return (
      <div>
        <h1>IronNutrition</h1>
        <SearchBar />
        <div>
          <button onClick={this.toggleForm}>Create new meal</button>
          {this.state.active && (
            <NewMeal onCreateNewMeal={this.createNewMeal} />
          )}

          {this.state.meal.map((meal) => (
            <div key={meal.image}>
              <MealBox meal={meal} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
