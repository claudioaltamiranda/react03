import React from 'react';
import { Card } from './Card';

export const ItemListContainer = () => {
  return (
    <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 g-4">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};
