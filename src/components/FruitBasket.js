import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = props =>
  <div className="fruit-basket">
    <Filter handleChange={props.updateFilterCallback} filters={props.filters}/>
    <FilteredFruitList
      fruit={props.fruit} filter={props.currentFilter}/>
  </div>;

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  updateFilterCallback: undefined,
  currentFilter: null
}

export default FruitBasket;
