import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom';
import NavMenu from './components/NavMenu/NavMenu';
import Home from './pages/Home/Home';
import AWordFromOurFounders from './pages/AWordFromOurFounders/AWordFromOurFounders';
import ExecutiveDirectorsNote from './pages/ExecutiveDirectorsNote/ExecutiveDirectorsNote';
import ByTheNumbers from './pages/ByTheNumbers/ByTheNumbers';
import NewSpeciesSpotlight from './pages/NewSpeciesSpotlight/NewSpeciesSpotlight';
import ALimitlessOceanOfData from './pages/ALimitlessOceanOfData/ALimitlessOceanOfData';
import DisseminatingTheDepths from './pages/DisseminatingTheDepths/DisseminatingTheDepths';
import InSearchOfHydrothermalLostCities from './pages/Expeditions/InSearchOfHydrothermalLostCities/InSearchOfHydrothermalLostCities';

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
import PressAndFootage from './pages/DisseminatingTheDepths/Contents/PressAndFootage';
import OnTheBigScreen from './pages/DisseminatingTheDepths/Contents/OnTheBigScreen';
import NotFound from './pages/NotFound/NotFound';

function App() {

  return (
    <Router>
      <NavMenu/>
      <Routes>
        <Route path='*' element={<NotFound/>}></Route>
        <Route path="/" element={<Home />} />
        <Route path="/expeditions">
          <Route index element={<Navigate to="/" replace />} />
          {/* <Route path="octopus_odyssey"  element={<OctopusOddyssey />}/> */}
          {/* <Route path="dynamics_of_sinking_microplastics"  element={<DynamicsOfSinkingMicroplastics />}/> */}
          <Route path="in_search_of_hydrothermal_lost_cities" element={<InSearchOfHydrothermalLostCities/>} />
        </Route>
        <Route path="/a_word_from_our_founders" element={<AWordFromOurFounders />} />
        {/* <Route path="/executive_directors_note" element={<ExecutiveDirectorsNote />} /> */}
        <Route path="/by_the_numbers" element={<ByTheNumbers />} />
        <Route path="/new_species_spotlight" element={<NewSpeciesSpotlight />} />
        {/* <Route path="/a_limitless_ocean_of_data" element={<ALimitlessOceanOfData/>} /> */}
        {/* <Route path="/disseminating_the_depths"  element={<DisseminatingTheDepths/>}>
          <Route index element={<Navigate to="/disseminating_the_depths/artist_at_sea" replace />} />
          <Route path="artist_at_sea"  element={<ArtistAtSea />}/>
          <Route path="community_building"  element={<CommunityBuilding />}/> 
          <Route path="divestreams_and_connections"  element={<DivestreamsAndConnections />}/>
          <Route path="press_and_footage"  element={<PressAndFootage />}/>
          <Route path="on_the_big_screen"  element={<OnTheBigScreen />}/>
        </Route> */}
        {/* <Route path="/the_deep_sea_continuum" element={<TheDeepSeaContinuum/>} >
          <Route index element={<Navigate to="/the_deep_sea_continuum/grants" replace />} />
          <Route path="grants"  element={<Grants />}/>
          <Route path="thought_leadership"  element={<ThroughtLeadership/>}/>
          <Route path="strategic_partnerships"  element={<StrategicPartnerships/>}/>
        </Route> */}
      </Routes>
    </Router>
  )
}

export default App
