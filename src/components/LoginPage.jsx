import React, { useState } from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";

import {auth} from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';


const LoginPage = ({ open, setOpen }) => {

  const navigate = useNavigate();
  const [input, setInput] = useState({
    email:"",
    password:""
  });

  const handleInput = (e) => {
      const value = e.target.value;
      const name = e.target.name;
      setInput({
        ...input,
        [name]:value,
    })
  }
  //  console.log(input);

  
  const handleLogin = async(e) => {
    setOpen(false);
    e.preventDefault();
    try {
    const response = await signInWithEmailAndPassword(auth,input.email, input.password);
    if(response){
      navigate("/home");
    }
  } catch (err) {
    console.log(err.message);
  }
  }

  // console.log(auth);

  return (
    <MDBContainer fluid>
      <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md="5"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                fluid
              />
            </MDBCol>

            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
            >
              <p className="text-center h1 fw-bold mb-2 mx-1 mx-md-4 mt-4">
                Log In
              </p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size="lg" />
                <MDBInput
                  label="Username / Email Address"
                  name="email"
                  id="form1"
                  type="text"
                  className="w-100"
                  onChange={handleInput}
                  class="form-control" required
                />
                <div className="invalid-feedback">Required Fill</div>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size="lg" />
                <MDBInput label="Password" id="form3" type="password" name="password" onChange={handleInput}/>
              </div>
              <div className="mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Remember Me"
                />
              </div>

              <MDBBtn className="mb-4" size="lg" onClick={handleLogin}>
                Log In
              </MDBBtn>

              <div className="d-flex flex-row align-items-center mb-4">
                <p>
                  Not Registered. <Link to={"/"}>Register Here</Link>
                </p>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default LoginPage;