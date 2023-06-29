import React, { useState } from 'react';

const House = ({ house, onDelete, onUpdate }) => {
  const [editMode, setEditMode] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(house.title);
  const [updatedBody, setUpdatedBody] = useState(house.body);

  const handleUpdate = () => {
    if (onUpdate) {
      onUpdate(house.id, updatedTitle, updatedBody);
      setEditMode(false);
    }
  };

  const handleCancel = () => {
    setUpdatedTitle(house.title);
    setUpdatedBody(house.body);
    setEditMode(false);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleDelete = () => {
    onDelete(house.id);
  };

  return (
    <div className="house">
      {!editMode ? (
        <>
          <h4>{house.title}</h4>
          <p>{house.body}</p>
          <div className="house-buttons">
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </>
      ) : (
        <>
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <textarea
            value={updatedBody}
            onChange={(e) => setUpdatedBody(e.target.value)}
          />
          <div className="house-buttons">
            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </>
      )}
    </div>
  );
};

export default House;
