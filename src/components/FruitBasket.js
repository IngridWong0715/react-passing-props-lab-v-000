import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({updateFilterCallback, filters, currentFilter, fruit}) =>
  <div className="fruit-basket">
    <Filter handleChange={updateFilterCallback} filters={filters}/>
    <FilteredFruitList
      fruit={fruit} filter={currentFilter}/>
  </div>;

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  updateFilterCallback: () => {},
  currentFilter: null
}

export default FruitBasket;
