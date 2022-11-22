import { Container } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Profile = () => {

  const user = JSON.parse(localStorage.getItem("user"))

  let img
  if (user.gender === "Male") {
    img = "https://www.maxpixel.net/static/photo/1x/User-Man-Head-The-Dummy-Avatar-Jacket-Tie-Foot-659652.png"
  } else {
    img = "https://cdn2.iconfinder.com/data/icons/business-and-finance-related-hand-gestures/256/face_female_blank_user_avatar_mannequin-512.png"
  }


  return (
    <Container>
      <Box mb="3rem">
        <img style={{ width: "15rem", borderRadius: "50%" }} src={img} alt="profile" />
      </Box>
      <Box>
        <h3>Name : {user.name}</h3>
        <h3>Email : {user.email}</h3>
      </Box>
    </Container>
  )
}

export default Profile