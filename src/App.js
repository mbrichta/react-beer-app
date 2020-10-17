import React from 'react';
import FilterCard from './components/FilterCard';
import Header from './components/Header';
import Pagination from './components/Pagination';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <FilterCard filter="abv" inputClass="beer">Alcohol Vol (ABV)</FilterCard>
        <FilterCard filter="ibu" inputClass="hops">Hoppiness (IBU)</FilterCard>
        <Pagination />
      </div>
    </div>
  );
}

export default App;
