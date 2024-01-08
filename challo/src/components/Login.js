import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';
import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom
import ReactDOM from 'react-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userExists, setUserExists] = useState(false);


  const login = () => {
    axios.get(`https://localhost:7122/api/N_DataAPI/login?userName=${username}&Password=${password}`)
      .then((response) => {
        if (response.data.user_Name === username && response.data.password === password) {
          alert("User exists!");
          setUserExists(true);

        } else {
          alert("User does not exist!");
        }
      })
      .catch((error) => {
        console.error('Error checking user in database:', error);
        // Handle other errors, e.g., network issues, server errors, etc.
      });
  };

  return (
    <div>
      <TextField
        variant="outlined"
        value={username}
        autoComplete="off"
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        variant="outlined"
        type="password"
        autoComplete="off"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" onClick={login}>Check User</Button>
    </div>
  );
}
