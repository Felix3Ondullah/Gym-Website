import React, {useState}from 'react'
import {Box} from "@mui/material"
import SearchExercises from '../SearchExercises'
import HeroBanner from '../HeroBanner'
import Exercises from '../Exercises'





const Home = () => {
  return (
   <Box>
    <HeroBanner />
    <SearchExercises />
    <Exercises />
   </Box>
  )
}

export default Home;