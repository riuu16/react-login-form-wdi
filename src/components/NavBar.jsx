import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

const NavBar = ({ open, setOpen }) => {
    
    return (
      <>
        {
          open ?  
          <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)', height:'200px'}}>
          <div className='mask gradient-custom-3'></div>
          <MDBCard className='m-5' style={{maxWidth: '600px'}}>
            <MDBCardBody className='px-5 text-center'>
              <h2 className="text-uppercase text-center mb-2">Welcome to the S.H.E.I.L.D.</h2>
              <Link to="/register">
                    <MDBBtn className="m-3">Registration</MDBBtn>
                </Link>
                <Link to="/login">
                    <MDBBtn className="m-3 ">Login Here</MDBBtn>
                </Link>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
        : null
        }      
      </>
    );
}

export default NavBar;






















