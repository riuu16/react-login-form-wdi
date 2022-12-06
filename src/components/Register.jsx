import React, { useState } from "react";

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
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = ({ open, setOpen }) => {

  const navigate = useNavigate();
  const [input, setInput] = useState({
      fullName:"",
      email:"",
      dob:"",
      location:"",
      password:"",
      cnfPassword:""
    });

    const handleInput = (e) => {
      const value = e.target.value;
      const name = e.target.name;
      // console.log(name,value)
      setInput({
        ...input,
        [name]:value,
    })
    }

    //  console.log(input);

  const handleFormData = async(e) => {
    setOpen(false);
      e.preventDefault();
      try {
        const response = await createUserWithEmailAndPassword(auth,input.email, input.password);
        console.log(response)
        if(response){
          navigate("/login");
        }
        } catch (err) {
        console.log(err.message);
          }
        }

        console.log(auth);

  return (
    <MDBContainer fluid>
      <MDBCard className="text-black m-5" style={{ borderRadius: "35px" }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol 
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
            >
              <p className="text-center h2 fw-bold mb-2 mx-1 mx-md-4 mt-2" >
                Sign up
              </p>

              <div className="d-flex flex-row align-items-center mb-4 " >
                <MDBIcon fas icon="user me-3" size="lg" />
                <MDBInput
                  label="Full Name"
                  name="fullName"
                  id="form1"
                  type="text"
                  onChange={handleInput}
                  required
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size="lg" />
                <MDBInput label="Email Address" name="email" id="form2" type="email" onChange={handleInput}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon far icon="calendar me-3" size="lg" />
                <MDBInput
                  label="DOB"
                  name="dob"
                  id="form1"
                  type="text"
                  className="w-100"
                  onChange={handleInput}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="map-marker me-3" size="lg" />
                <MDBInput
                  label="Location"
                  name="location"
                  id="form1"
                  type="text"
                  className="w-100"
                  onChange={handleInput}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size="lg" />
                <MDBInput label="Password" name="password" id="form3" type="password" onChange={handleInput}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size="lg" />
                <MDBInput label="Confirm password" name="cnfPassword" id="form4" type="password" onChange={handleInput}/>
              </div>

              <MDBBtn className="mb-4" size="lg" onClick={handleFormData}>
                Register
              </MDBBtn>

              <div className="d-flex flex-row align-items-center mb-4">
                <p>
                  Already Registered. <Link to={"/login"}>Login</Link>
                </p>
              </div>
            </MDBCol>

            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                fluid
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default Register;
