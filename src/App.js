import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './layouts/navigation';
import Rockets from './components/Rockets/rockets';
import Missions from './components/missions/missions';
import MyProfile from './components/myProfile/myProfile';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/mission" element={<Missions />} />
        <Route path="/myprofile" element={<MyProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
