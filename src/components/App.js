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

  //FETCHES ALL THE FILTERS ONCE AFTER MOUNTING
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
      // SHOULD WE PASS IN THIS.STATE.currentFilter?????
      let currentFilter = this.state.currentFilter
      fetch('/api/fruit')
      .then(response => response.json())
      .then(items => {
        this.setState({ fruit: items })
      });
    }

    //HANDLE CHANGE IN FILTER SELECTION
    handleFilterChange = event => {
      console.log('new filter: ', event.target.value);
      this.setState({ currentFilter: event.target.value });


    } //pass down to fruitBasket which then passes it down to filter

  render(){
    return(
      <div className="main">
        <FruitBasket updateFilterCallback={this.handleFilterChange} filters={this.state.filters} fruit={this.state.fruit} currentFilter={this.state.currentFilter} />
      </div>
    )
  }
}


export default App;
