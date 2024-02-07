import React from 'react';
import logo from './logo.svg';
import './App.css';
import AllRoutes from './Routes/AllRoutes';
import Navbar from './Component/Navbar';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <Box bg="gray.800" >
   
     <Navbar/>
     <AllRoutes/>
    </Box>
  );
}

export default App;
