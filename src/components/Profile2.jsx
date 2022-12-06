import React from 'react'
import {
  MDBInputGroup,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
} from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'

const Profile2 = () => {
  return (
    <MDBContainer fluid>
      <MDBCard className="text-black m-5" style={{ borderRadius: '25px' }}>
        <MDBCardBody>
          <div className="container fluid ">
            <div className="row justify-content-evenly">
              <div className="col-4">
                <p className="h4 fw-bold mb-3">Complete Profile Step-2</p>
                <h5>Bio</h5>
                <div className="form-outline">
                  <textarea
                    style={{ resize: 'none' }}
                    cols="35"
                    rows="2"
                    className="border-1 w-75 mb-3"
                    id="textAreaExample"
                    placeholder="Write your bio here..."
                  ></textarea>
                </div>
                <h5>LinkedIn Url</h5>
                <div className="form-outline">
                  <input
                    type="url"
                    id="typeURL"
                    className="border-1 w-75 mb-3"
                    placeholder="Enter your linkedin url"
                  />
                </div>
                <h5>Facebook Url</h5>
                <div className="form-outline mb-3">
                  <input
                    type="url"
                    id="typeURL"
                    className="border-1 w-75 mb-3"
                    placeholder="Enter your facebook url"
                    cols="20"
                  />
                </div>
                <Link to={'/profile1'}>
                  <MDBBtn className="mx-2" size="md">
                    Back
                  </MDBBtn>
                </Link>
                <Link to={'/personaldetails'}>
                  <MDBBtn className="mx-2" size="md">
                    Submit
                  </MDBBtn>
                </Link>
              </div>
              <div className="col-4">
                <p className="text-center h4 fw-bold mb-3">
                  Instructions for the Candidate
                </p>
                <div>
                  <div className="note note-danger mb-3">
                    <ol>
                      <li>Bio must be only 2000 words.</li>
                      &nbsp;
                      <li>
                        URl must include only http or https automatically.
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  )
}

export default Profile2
