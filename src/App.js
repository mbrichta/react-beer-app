import React, { useContext } from 'react';
import FilterCard from './components/FilterCard';
import Header from './components/Header';
import BeerCard from './components/BeerCard'
import Pagination from './components/Pagination';
import { Context } from './context';

function App() {

  const { beerData } = useContext(Context)

  return (
    <div>
      <Header />
      <div className="container">
        <div className="filters">
          <FilterCard filter="abv" inputClass="beer">Alcohol Vol (ABV)</FilterCard>
          <FilterCard filter="ibu" inputClass="hops">Hoppiness (IBU)</FilterCard>
          <Pagination />
        </div>
        <div className="beers">
          {beerData.map(beer => (
            <BeerCard beer={beer} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
