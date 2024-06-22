import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DrugDetails from './pages/DrugDetails';
import { Container } from '@mui/material';

function App() {
  return (
      <Container>
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/drugs/:drugName" element={<DrugDetails/>} />
          <Route exact path="*" element={<h1>404</h1>} />
        </Routes>
      </Container>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
