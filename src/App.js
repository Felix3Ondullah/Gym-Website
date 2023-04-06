import React from "react";
import {Route, Routes } from "react-router-dom";
import {Box} from "@mui/material";
import ExcerciseDetails from "./Components/pages/ExcerciseDetails";
import Home from "./Components/pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <Box width = "400px" sx = {{width: {x1:'1488px'}}} m = "auto">
      <Navbar />
      <Routes>
        <Route path= "/" element= {<Home/>} />
        <Route path= "/exercise/:id" element= {<ExcerciseDetails />} />
      </Routes>
      <Footer/>
    </Box>
  
  );
}

export default App;
