import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import { ChakraProvider, Box } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <ChakraProvider>     
        <Dashboard/>        
      </ChakraProvider>      
    </div>
  );
}

export default App;
