import React, { useState } from 'react';
import Beer from './Beer';
import './BeerList.css';

interface BeerListProps {
  beers: string[];
}

const BeerList: React.FC<BeerListProps> = ({ beers }) => {
  const [beerList, setBeerList] = useState(beers);
  const [newBeer, setNewBeer] = useState('');

  const addBeer = () => {
    if (newBeer.trim() !== '') {
      setBeerList([...beerList, newBeer]);
      setNewBeer('');
    }
  };

  const removeBeer = (index: number) => {
    const updatedList = beerList.filter((_, i) => i !== index);
    setBeerList(updatedList);
  };

  return (
    <div className="beer-list-container">
      <h2>Mes bières préférées</h2>
      <ul>
          {beerList.map((beer, index) => (
              <div key={index} className="beer-item">
                  <div className="beer-name"><Beer name={beer} id={index} />  </div>
                  <button onClick={() => removeBeer(index)}>Supprimer</button>
              </div>
          ))}
      </ul>
      <input
        type="text"
        value={newBeer}
        onChange={(e) => setNewBeer(e.target.value)}
        placeholder="Nom de la bière"
      />
      <button className="add-button" onClick={addBeer}>Ajouter une bière</button>
    </div>
  );
};

export default BeerList;
