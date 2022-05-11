import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';
import logo from '../assets/images/planet.png';

const Navigation = () => (
  <>
    <nav>
      <div className="logo-wrap">
        <img src={logo} alt="Logo" className="logo-pic" />
        <h1>
          Space-Travelers-Hub
        </h1>
      </div>
      <div className="navlink-wrap">
        <NavLink
          to="/"

        >
          Rockets
        </NavLink>
        <NavLink
          to="/mission"

        >
          Missions
        </NavLink>
        <span>|</span>
        <NavLink
          to="/rockets"
        >
          My profile
        </NavLink>
      </div>
    </nav>
  </>
);
export default Navigation;
