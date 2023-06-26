import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Rebate } from "./pages/Rebate/Rebate";
import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<Rebate />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
