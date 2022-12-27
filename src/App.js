import React from 'react';
import './css/App.css';
import Home from './Components/Home.jsx';
import Add from './Components/Add.jsx';
import Edit from './Components/Edit.jsx';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Add />} />
          <Route path='/edit' element={ <Edit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
