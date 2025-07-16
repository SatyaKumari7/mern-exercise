import React from 'react';
//import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Navbar from "./components/navbar.component";
import Footer from "./components/Footer"
import ExercisesList from "./components/exercises-list.component";
//import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import EditExerciseWrapper from './components/EditExerciseWrapper';
function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Routes>
          <Route path="/" element={<Home />} />  {/* ✅ Home route */}
          <Route path="/exercises" element={<ExercisesList />} /> 
          <Route path="/edit/:id" element={<EditExerciseWrapper />} />
          <Route path="/create" element={<CreateExercise />} />
          <Route path="/user" element={<CreateUser />} />

        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
