import React, { useState } from 'react';
import logo from '../images/logo.png'
import './header.css';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';

export default function App() {
  const [showNavExternal, setShowNavExternal] = useState(false);

  return (
    <>
      <MDBCollapse show={showNavExternal}>
        <div className='bg-light p-4'>
        <ul className='realLink'>
            <li>
              <a href="#">SUITS</a>
            </li>
            <li>
              <a href="#">SHIRTS</a>
            </li>
            <li>
              <a href="#">TIES</a>
            </li>
            <li>
              <a href="#">ACCESSORIES</a>
            </li>
            <li>
              <a href="#">GIFT CARDS</a>
            </li>
            <li>
              <a href="#">HELP & CONTACT</a>
            </li>
            <li>
              <a href="#">HOW OUR SIZING WORKS</a>
            </li>
            <li>
              <a href="#">REVIEWS</a>
            </li>
            <li>
              <a href="#">LOOKBOOK ARCHIVE</a>
            </li>
          </ul>
        </div>
      </MDBCollapse>
      <MDBNavbar class="fixed-top light bg-light">
        <MDBContainer fluid>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarToggleExternalContent'
            aria-controls='navbarToggleExternalContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavExternal(!showNavExternal)}
          >
           <MDBIcon fas icon="bars" />
           <img src={logo} />
          </MDBNavbarToggler>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}