
import React, { useState } from 'react';
import HouseList from './HouseList';
import './HousePage.js';

const HousesPage = () => {
  const [houses, setHouses] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleAddHouse = () => {
    const newHouse = {
      id: Date.now(),
      title: title || 'New House Title',
      body: body || 'New House Description',
    };

    setHouses([...houses, newHouse]);
    setTitle('');
    setBody('');
  };

  const handleDeleteHouse = (houseId) => {
    setHouses(houses.filter((house) => house.id !== houseId));
  };

  const handleUpdateHouse = (houseId, updatedTitle, updatedBody) => {
    const updatedHouses = houses.map((house) => {
      if (house.id === houseId) {
        return {
          ...house,
          title: updatedTitle,
          body: updatedBody,
        };
      }
      return house;
    });

    setHouses(updatedHouses);
  };

  return (
    <div className="houses-page">
      <h2>Houses</h2>
      <div className="add-house-form">
        <h3>Add a House</h3>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Body:</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button onClick={handleAddHouse}>Add House</button>
      </div>
      <h3>House List</h3>
      <HouseList
        houses={houses}
        onDelete={handleDeleteHouse}
        onUpdate={handleUpdateHouse}
      />
    </div>
  );
};

export default HousesPage;
