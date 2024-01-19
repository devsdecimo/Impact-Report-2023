import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function About() {
  return (
    <div>
      {/* <h2>About Page</h2>
      <nav>
        <Link to="team">Our Team</Link> | <Link to="history">Our History</Link>
      </nav>
      <Outlet />  */}
      <p>Test</p>
      {/* Este componente renderizará Team o History dependiendo de la ruta */}
    </div>
  );
}

export default About;