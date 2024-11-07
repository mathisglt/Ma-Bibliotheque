import React from 'react';
import './Beer.css';
interface BeerProps {
  name: string;
  id: number;
}

const Beer: React.FC<BeerProps> = ({ name }) => {
  return <div className="nombiere">{name}</div>;
};

export default Beer;
