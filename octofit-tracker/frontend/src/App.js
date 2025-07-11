
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import './App.css';


function App() {
  return (
    <Router>
      <div className="container py-4">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded mb-4 shadow">
          <div className="container-fluid">
            <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
              <img src="/octofitapp-small.png" alt="OctoFit Logo" className="App-logo me-2" />
              OctoFit Tracker
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/activities">Activities</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/teams">Teams</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/users">Users</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/workouts">Workouts</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="mt-4">
          <Routes>
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/" element={
              <div className="card shadow text-center p-5">
                <img src="/octofitapp-small.png" alt="OctoFit Logo" className="App-logo mb-3" style={{height:'100px'}} />
                <h1 className="display-4 mb-3">Welcome to OctoFit Tracker</h1>
                <p className="lead">Track your fitness, join teams, and compete on the leaderboard!</p>
                <Link to="/activities" className="btn btn-primary btn-lg m-2">View Activities</Link>
                <Link to="/leaderboard" className="btn btn-success btn-lg m-2">Leaderboard</Link>
                <Link to="/teams" className="btn btn-info btn-lg m-2">Teams</Link>
                <Link to="/users" className="btn btn-secondary btn-lg m-2">Users</Link>
                <Link to="/workouts" className="btn btn-warning btn-lg m-2">Workouts</Link>
              </div>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
