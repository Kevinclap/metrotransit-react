import { Navbar } from 'react-bootstrap';

import React from 'react'

const Header = () => {
  return (
    <div>
     <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="http://svc.metrotransit.org/" target="_blank" rel="noopener noreferrer">Metro Transit</a>
        </Navbar.Brand>
      </Navbar.Header>
     </Navbar>
    </div>
  )
}

export default Header;
