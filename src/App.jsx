import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavMenu from './components/NavMenu/NavMenu';
import Home from './pages/Home/Home';
import AWordFromOurFounders from './pages/AWordFromOurFounders/AWordFromOurFounders';
import ExecutiveDirectorsNote from './pages/ExecutiveDirectorsNote/ExecutiveDirectorsNote';
import ByTheNumbers from './pages/ByTheNumbers/ByTheNumbers';
import NewSpeciesAndSeafloorSpotlight from './pages/NewSpeciesAndSeafloorSpotlight/NewSpeciesAndSeafloorSpotlight';
import ALimitlessOceanOfData from './pages/ALimitlessOceanOfData/ALimitlessOceanOfData';
import DisseminatingTheDepths from './pages/DisseminatingTheDepths/DisseminatingTheDepths';
import InSearchOfHydrothermalLostCities from './pages/InSearchOfHydrothermalLostCities/InSearchOfHydrothermalLostCities';

//Expeditions
import OctopusOddyssey from './pages/Expeditions/OctopusOdyssey/OctopusOddyssey';
import DynamicsOfSinkingMicroplastics from './pages/Expeditions/DynamicsOfSinkingMicroplastics/DynamicsOfSinkingMicroplastics';
import TheDeepSeaContinuum from './pages/TheDeepSeaContinuum/TheDeepSeaContinuum';
import Grants from './pages/TheDeepSeaContinuum/Contents/Grants';
import ThroughtLeadership from './pages/TheDeepSeaContinuum/Contents/ThroughtLeadership';
import StrategicPartnerships from './pages/TheDeepSeaContinuum/Contents/StrategicPartnerships';
import ArtistAtSea from './pages/DisseminatingTheDepths/Contents/ArtistAtSea';
import CommunityBuilding from './pages/DisseminatingTheDepths/Contents/CommunityBuilding';
import DivestreamsAndConnections from './pages/DisseminatingTheDepths/Contents/DivestreamsAndConnections';

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
        <Route path="/a_word_from_our_founders" element={<AWordFromOurFounders />} />
        <Route path="/executive_directors_note" element={<ExecutiveDirectorsNote />} />
        <Route path="/by_the_numbers" element={<ByTheNumbers />} />
        <Route path="/new_species_and_seafloor_spotlight" element={<NewSpeciesAndSeafloorSpotlight />} />
        <Route path="/a_limitless_ocean_of_data" element={<ALimitlessOceanOfData/>} />
        <Route path="/disseminating_the_depths"  element={<DisseminatingTheDepths/>}>
          <Route path="artist_at_sea"  element={<ArtistAtSea />}/>
          <Route path="community_building"  element={<CommunityBuilding />}/>
          <Route path="divestreams_and_connections"  element={<DivestreamsAndConnections />}/>
        </Route>
        <Route path="/in_search_of_hydrothermal_lost_cities" element={<InSearchOfHydrothermalLostCities/>} />
        <Route path="/the_deep_sea_continuum" element={<TheDeepSeaContinuum/>} >
          <Route path="grants"  element={<Grants />}/>
          <Route path="thought_leadership"  element={<ThroughtLeadership/>}/>
          <Route path="strategic_partnerships"  element={<StrategicPartnerships/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
