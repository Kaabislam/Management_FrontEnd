import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const ViewProfileStudent = () => {
  const [allUserList,setAllUserList] =useState([])
    const router = useRouter();
    const { register, handleSubmit } = useForm();
    

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
    <Grid container sx={{justifyContent:"center"}}>
  
    </Grid>
    </>
  )
}

export default ViewProfileStudent