
import React from 'react';
import House from './House';

const HouseList = ({ houses, onDelete, onUpdate }) => {
  return (
    <div className="house-list">
      {houses.map((house) => (
        <House
          key={house.id}
          house={house}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

export default HouseList;


