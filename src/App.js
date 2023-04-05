import React from "react";
import {Route, Routes} from 'react-dom';
import {Box} from "@mui/material";

function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path= "/" element= {Home />} />
        <Route path= "/exercise/:id" element= {ExerciseDetail />} />
      </Routes>
    </Box>
  
  );
}

export default App;
