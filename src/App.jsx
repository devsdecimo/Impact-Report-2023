import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About';
import Team from './pages/Team';
import History from './pages/History';
import NavMenu from './components/NavMenu/NavMenu';

function App() {

  return (
    <Router>
      <NavMenu/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="team" element={<Team />} />
          <Route path="history" element={<History />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
