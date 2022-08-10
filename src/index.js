import React from 'react';
import ReactDOM from 'react-dom/client';
import MainPage from "./MainPage"
import Searcher from "./pages/Searcher"
import Workout from "./pages/WorkoutPage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <> <Router>
    <Routes>
      <Route path="/" element={<MainPage />}/>
      <Route path="/searcher" element={<Searcher />}/>
      <Route path="/workout/:name" element={<Workout />} />
    </Routes>
  </Router>
      
    </>
);

