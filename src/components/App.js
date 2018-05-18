import React from 'react';

import FruitBasket from './FruitBasket';


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      filters: [],
      currentFilter: null,
      fruit: [] //FRUIT CONTAINS ALL THE FRUITS (NOT filtered)
    }
  }


  componentWillMount() {
    this.fetchFilters();
    this.fetchFruits();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  fetchFruits = () => {
    fetch('/api/fruit')
    .then(response => response.json())
    .then(fruit => this.setState({ fruit }));
  }

  updateFilter = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  render(){
    return (
      <FruitBasket
        updateFilterCallback={this.updateFilter}
        filters={this.state.filters} fruit={this.state.fruit}
        currentFilter={this.state.currentFilter}
      />
    );
  }
}


export default App;
