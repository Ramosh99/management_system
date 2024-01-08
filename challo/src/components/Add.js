import React from 'react';
import { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { Button, Paper, Box } from '@mui/material'; // Import Button, Paper, Box from @mui/material

export default function Add() {
  const formAddMember = useRef('');
  const navigate = useNavigate();
  const name =useRef('');
  const password =useRef('');
  

  function AddMemberFor() {
    var payload = {
      password: name.current.value,
      user_Name: password.current.value,
    };
    axios.post('https://localhost:7122/api/N_DataAPI', payload).then((response) => {
      navigate('/view');
    });
  }

  return (
    <div>
      <Paper style={{width:300,padding:10,textAlign:"center"}}>
        {/* Use Box component from @mui/material */}
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        {/* Use TextField component from @mui/material */}
        <TextField id="outlined-basic" label="user name" variant="outlined" inputRef={name} />
        <TextField id="outlined-basic" label="password" variant="outlined" inputRef={password} />
        {/* Use Button component from @mui/material */}
        
      </Box>
      <Button variant="contained" onClick={AddMemberFor}>Add</Button>
      </Paper>
    </div>
  );
}
