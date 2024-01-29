import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavMenu from './components/NavMenu/NavMenu';
import Home from './pages/Home/Home';
import AWordFromOurFounders from './pages/AWordFromOurFounders/AWordFromOurFounders';
import ExecutiveDirectorsNote from './pages/ExecutiveDirectorsNote/ExecutiveDirectorsNote';
import OctopusOddyssey from './pages/Expeditions/OctopusOdyssey/OctopusOddyssey';
import DynamicsOfSinkingMicroplastics from './pages/Expeditions/DynamicsOfSinkingMicroplastics/DynamicsOfSinkingMicroplastics';

function App() {

  return (
    <Router>
      <NavMenu/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expeditions">
          <Route path="octopus_odyssey"  element={<OctopusOddyssey />}/>
          <Route path="dynamics_of_sinking_microplastics"  element={<DynamicsOfSinkingMicroplastics />}/>
        </Route>
        <Route path="/executive_directors_note" element={<ExecutiveDirectorsNote />} />
        <Route path="/a_word_from_our_founders" element={<AWordFromOurFounders />} />
      </Routes>
    </Router>
  )
}

export default App
