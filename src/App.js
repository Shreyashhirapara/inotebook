import './App.css';
import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import { Alert } from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar/>
          <Alert message="This is amazing React course"/>
          <div className="container">
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/Login" element={<Login />} />
                <Route exact path="/Signup" element={<Signup />} />
              </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
