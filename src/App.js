import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import BasicExample from './components/Navbar/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Programs from './components/Programs/Programs';
import About from './components/About/About';



function App() {
  return (
    <Router>
      <div className="App">
        <BasicExample />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;