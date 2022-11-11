import { Box, Button, Container, FormControl, Input, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signup } from '../../Redux/AuthReducer/action'

const Signup = () => {


  const dispatch = useDispatch()

  const [form, setForm] = useState({
    name:"",
    email:"",
    password:"",
    gender:"",
    age:""
  })


  const handleChange = (event) => {
    setForm(form => ({
      ...form,
      [event.target.name]: event.target.value
    }))
  };


  const handleSubmit = (event) => {
    event.preventDefault()

    console.log(form)

    dispatch(signup(form))
  }

  return (
    <Container maxWidth="sm">
      <form action="" onSubmit={handleSubmit}>
        <Box m={1.5}>
          <FormControl>
            <InputLabel htmlFor="my-input">Name</InputLabel>
            <Input id="name" name="name" value={form.name} onChange={handleChange} />
          </FormControl>
        </Box>
        
        <Box>
          <FormControl variant="standard" sx={{ pr: 1, minWidth: 200 }} >
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="gender"
              value={form.gender}
              label="Gender"
              onChange={handleChange}
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box m={1.5}>
          <FormControl>
            <InputLabel htmlFor="my-input">Age</InputLabel>
            <Input id="age" name="age" value={form.age} onChange={handleChange} />
          </FormControl>
        </Box>
        <Box m={1.5}>
          <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="email" name="email" value={form.email} onChange={handleChange} />
          </FormControl>
        </Box>
        <Box m={1.5} >
          <FormControl>
            <InputLabel htmlFor="my-input">Password</InputLabel>
            <Input id="password" name="password" value={form.password} onChange={handleChange} />
          </FormControl>
        </Box>
        <Box>
          <Button type='submit'>Submit</Button>
        </Box>
      </form>
    </Container>
  )
}

export default Signup