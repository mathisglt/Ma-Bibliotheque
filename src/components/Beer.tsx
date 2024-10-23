import React from 'react';

interface BeerProps {
  name: string;
  id: number;
}

const Beer: React.FC<BeerProps> = ({ name }) => {
  return <li>{name}</li>;
};

export default Beer;
