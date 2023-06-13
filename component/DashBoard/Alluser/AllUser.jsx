import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const AllUser = () => {
  const [allUserList,setAllUserList] =useState([])
    const router = useRouter();
    const { register, handleSubmit } = useForm();
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }
    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];
      
      useEffect(() => {
        axios.get('http://localhost:8080/users').then((res)=>{
          setAllUserList(res.data)
        })
       
      } ,[]);

console.log(allUserList)
    const onSubmit = (data) => {
        console.log(data)
        
        // router.push('/dashboard');
        // axios.post('/user', data)
      };
    
  return (
    <>
    <Grid container sx={{justifyContent:"center"}}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>User Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Role Type</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {allUserList.map((item) => (
            <TableRow
              key={item.userName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.userName}
              </TableCell>
              <TableCell align="right">{item.email}</TableCell>
              <TableCell align="right">{item.roleType}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    </>
  )
}

export default AllUser