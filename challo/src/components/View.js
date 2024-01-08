import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";

export default function View() {
  const [all_d, set_d] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://localhost:7122/api/N_DataAPI")
      .then((response) => {
        set_d(response.data || []);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">User Name</TableCell>
              <TableCell align="right">Password</TableCell>
              {/* Adjust TableCell headers accordingly */}
            </TableRow>
          </TableHead>
          <TableBody>
            {all_d.map((row) => (
              <TableRow
                key={row.id} // Ensure the key matches a unique identifier in your data
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.user_Name}</TableCell>
                <TableCell align="right">{row.password}</TableCell>
                {/* Adjust TableCell data accordingly */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
