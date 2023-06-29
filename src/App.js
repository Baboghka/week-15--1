<<<<<<< HEAD


  import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const MOCK_API_URL = 'https://649b5955bf7c145d023a3e47.mockapi.io/user';
  const [users, setUsers] = useState([]);
  const [newUserName, setNewUserName] = useState('');
  const [newUserJobTitle, setNewUserJobTitle] = useState('');
  const [newUserCompanyName, setNewUserCompanyName] = useState('');
  const [updateName, setUpdatedName] = useState('');
  const [updatedJobTitle, setUpdatedJobTitle] = useState('');
  const [updatedCompanyName, setUpdatedCompanyName] = useState('');

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    fetch(MOCK_API_URL)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }

  function deleteUser(id) {
    fetch(`${MOCK_API_URL}/${id}`, {
      method: 'DELETE',
    }).then(() => getUsers());
  }

  function postNewUser(e) {
    e.preventDefault();
    fetch(MOCK_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: newUserName,
        jobTitle: newUserJobTitle,
        companyName: newUserCompanyName,
      }),
    })
      .then(() => {
        getUsers();
        setNewUserName('');
        setNewUserJobTitle('');
        setNewUserCompanyName('');
      })
      .catch((error) => console.log(error));
  }

  function updateUser(e, userObject) {
    e.preventDefault();
    let updatedUserObject = {
      ...userObject,
      name: updateName,
      jobTitle: updatedJobTitle,
      companyName: updatedCompanyName,
    };
    fetch(`${MOCK_API_URL}/${userObject.id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedUserObject),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => getUsers())
      .catch((error) => console.log(error));
  }

  return (
    <div className="App">
      <form>
        <h3>POST new user form</h3>
        <label>Name</label>
        <input
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
        />
        <label>Job Title</label>
        <input
          value={newUserJobTitle}
          onChange={(e) => setNewUserJobTitle(e.target.value)}
        />
        <label>Company Name</label>
        <input
          value={newUserCompanyName}
          onChange={(e) => setNewUserCompanyName(e.target.value)}
        />
        <button onClick={(e) => postNewUser(e)}>Submit</button>
      </form>

      {users.map((user, index) => (
        <div key={index}>
          <div className="userContainer">
            <div>
              <p>Name: {user.name}</p>
              <p>Job Title: {user.jobTitle}</p>
              <p>Company Name: {user.companyName}</p>
              <button onClick={() => deleteUser(user.id)}>Delete</button>
            </div>
            <form>
              <h3>Update This User</h3>
              <label>Update Name</label>
              <input
                value={updateName}
                onChange={(e) => setUpdatedName(e.target.value)}
              />

              <label>Update Job Title</label>
              <input
                value={updatedJobTitle}
                onChange={(e) => setUpdatedJobTitle(e.target.value)}
              />

              <label>Update Company Name</label>
              <input
                value={updatedCompanyName}
                onChange={(e) => setUpdatedCompanyName(e.target.value)}
              />
              <button onClick={(e) => updateUser(e, user)}>Update</button>
            </form>
          </div>
        </div>
      ))}
=======
import React from 'react'
import './App.css';
import HousesPage from './HousePage';

function App() {
  return (
    <div className="App">
      <HousesPage />
>>>>>>> c482f3db7ce9234402ad42cb075c246279be8311
    </div>
  );
}

export default App;
<<<<<<< HEAD
=======


>>>>>>> c482f3db7ce9234402ad42cb075c246279be8311
