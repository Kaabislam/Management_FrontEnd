import { Box, Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, styled, tableCellClasses } from '@mui/material'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const AllUser = () => {
  const [allUserList,setAllUserList] =useState([])
    const router = useRouter();
  
    
      
      useEffect(() => {
        axios.get('http://localhost:8080/admin/users').then((res)=>{
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
    <Grid container sx={{justifyContent:"center",paddingTop:"3%"}}>
      <Typography variant='h4'>
        All Users
      </Typography>
    </Grid>
    <Box>
    <Grid container sx={{justifyContent:"center"}}>
    <Paper sx={{width:"800px" ,padding:"2%"}} elevation={5} >
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead sx={{height:"60px"}}>
          <TableRow>
            <StyledTableCell>User Name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Role Type</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {allUserList.map((item) => (
            <StyledTableRow
              key={item.userName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {item.userName}
              </StyledTableCell>
              <StyledTableCell align="center">{item.email}</StyledTableCell>
              <StyledTableCell align="center">{item.roleType}</StyledTableCell>
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Paper>
    </Grid>
    </Box>
    </>
  )
}

export default AllUser