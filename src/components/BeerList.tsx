import React, { useState } from 'react';
import Beer from './Beer';

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
    <div>
      <h2>Mes bières préférées</h2>
      <ul>
        {beerList.map((beer, index) => (
          <div key={index}>
            <Beer name={beer} id={index} />
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
      <button onClick={addBeer}>Ajouter une bière</button>
    </div>
  );
};

export default BeerList;
