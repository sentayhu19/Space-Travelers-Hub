import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navigation from './layouts/navigation';
import Rockets from './components/Rockets/rockets';
import Missions from './components/missions/missions';
import MyProfile from './components/myProfile/myProfile';
import store from './redux/configureStore';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Rockets />} />
            <Route path="/mission" element={<Missions />} />
            <Route path="/myprofile" element={<MyProfile />} />
          </Routes>
        </Router>
      </Provider>
    </>

  );
}

export default App;
