import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import exercise from './exercise_bg.webp'
export default function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>
          Welcome to <span className="highlight">TrackU</span>
        </h1>
        <p className="subtitle">
          Track your workouts. Stay consistent. Reach your fitness goals.
        </p>
        <div className="buttons">
          <Link to="/create" className="btn">Start Logging</Link>
          <Link to="/exercises" className="btn secondary">View Logs</Link>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="how-to-use">
        <h2>How to Use:</h2>
        <div className="cards">
          <div className="card">
            <h3>Create User</h3>
            <p>Add a new user to start tracking their fitness journey.</p>
            <img src={exercise} alt="Create User" />
            <Link to="/user" className="btn view-btn">View</Link>
          </div>
          <div className="card">
            <h3>Create Exercise</h3>
            <p>Log a new workout session with details like duration and reps.</p>
            <img src={exercise} alt="Create Exercise" />
            <Link to="/create" className="btn view-btn">View</Link>
          </div>
          <div className="card">
            <h3>Exercises</h3>
            <p>See all your logged workouts in one place.</p>
            <img src={exercise} alt="Exercise List" />
            <Link to="/exercises" className="btn view-btn">View</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
