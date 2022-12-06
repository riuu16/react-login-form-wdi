import React, { useState } from 'react'
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBContainer,
  MDBCard,
  MDBBtn,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBIcon,
  MDBTypography,
  MDBCardTitle,
  MDBCardText,
  MDBCheckbox,
} from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
import PaymentModal from './PaymentModal'

const PersonalDetails = ({ open, setOpen }) => {
  const [basicActive, setBasicActive] = useState('tab1')

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return
    }

    setBasicActive(value)
  }

const[openModal, setOpenModal] = useState(false);

const handleModal = () => {
  setOpenModal(true);
}

const handleModalClick = () => {
    setOpenModal(prevState => !prevState);
  };
const addCreditCard =()=>{

}
  return (
    <div className="w-75 mx-auto">
      <MDBContainer fluid>
        <MDBCard className="text-black m-4" style={{ borderRadius: '25px' }}>
          <div className="d-flex justify-content-between p-2">
            <div className="d-flex m-2">
              <strong>Welcome Riya</strong>
            </div>
            <Link to="/login">
            <MDBBtn rounded onClick={() => setOpen(true)}>Log Out</MDBBtn>
            </Link>
          </div>
        </MDBCard>
      </MDBContainer>

      <MDBTabs className="mb-3 mx-5">
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleBasicClick('tab1')}
            active={basicActive === 'tab1'}
          >
            Personal Details
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleBasicClick('tab2')}
            active={basicActive === 'tab2'}
          >
            Change Password
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleBasicClick('tab3')}
            active={basicActive === 'tab3'}
          >
            Delete Account
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleBasicClick('tab4')}
            active={basicActive === 'tab4'}
          >
            Make Payment
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      {/* Tabs Button End Here */}

      {/* ----------------------------- */}

      {/* Tabs Contents Start here */}

      {/* Personal Details Tab Start here */}
      <MDBTabsContent className="mx-5">
        <MDBTabsPane show={basicActive === 'tab1'}>
          <div className="d-flex flex-column mb-1">
            <div className="p-2">
              <h6>Personal Details</h6>
            </div>
            <MDBContainer fluid>
              <form className="validated">
                <MDBRow>
                  <MDBCol
                    md="3"
                    lg="5"
                    className=" d-flex flex-column justify-content-start"
                  >
                    <div className="d-flex flex-row align-items-center mb-3">
                      <MDBIcon fas icon="user mx-3" size="md" />
                      <MDBInput
                        label="Full Name"
                        name="fullName"
                        id="form1"
                        type="text"
                        required
                      />
                    </div>
                  </MDBCol>
                  <MDBCol
                    md="3"
                    lg="5"
                    className=" d-flex flex-column justify-content-start"
                  >
                    <div className="d-flex flex-row align-items-center mb-3 ">
                      <MDBIcon fas icon="envelope mx-3" size="md" />
                      <MDBInput
                        label="Email"
                        name="email"
                        id="form1"
                        type="text"
                        className="w-100"
                        required
                      />
                    </div>
                  </MDBCol>
                  <MDBCol
                    md="3"
                    lg="5"
                    className=" d-flex flex-column justify-content-start"
                  >
                    <div className="d-flex flex-row align-items-center mb-3 ">
                      <MDBIcon far icon="calendar mx-3" size="md" />
                      <MDBInput
                        label="DOB"
                        name="dob"
                        id="form1"
                        type="text"
                        className="w-100"
                        required
                      />
                    </div>
                  </MDBCol>
                  <MDBCol
                    md="3"
                    lg="5"
                    className=" d-flex flex-column justify-content-start"
                  >
                    <div className="d-flex flex-row align-items-center mb-3 ">
                      <MDBIcon fas icon="map-marker mx-3" size="md" />
                      <MDBInput
                        label="Location"
                        name="location"
                        id="form1"
                        type="text"
                        className="w-100"
                        required
                      />
                    </div>
                  </MDBCol>
                </MDBRow>
              </form>

              <MDBRow className="d-flex justify-content-evenly mt-1">
                <MDBCol>
                  <MDBBtn>Submit</MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
            <MDBRow className="m-1 mt-5">
              <MDBCol>
                <div>
                  <h5 className="h4 fw-bold mb-3">
                    Instructions for the Candidate
                  </h5>
                  <MDBRow className="d-flex justify-content-evenly">
                    <MDBCol className="mb-3">
                      <ol>
                        <li>
                          Please add proper validations on all the fields.
                        </li>
                        <li>Date of Birth should be more than 18+ years.</li>
                      </ol>
                    </MDBCol>
                  </MDBRow>
                </div>
              </MDBCol>
            </MDBRow>
          </div>
        </MDBTabsPane>
        {/* Personal Details Tab End here */}

        {/* ----------------------------- */}

        {/* Generate Password Tab Start here */}
        <MDBTabsPane show={basicActive === 'tab2'}>
          <div className="d-flex flex-column mb-1">
            <div className="p-2">
              <h6>Generate Password</h6>
            </div>
          </div>
          <MDBContainer>
            <form className="validated">
              <MDBRow>
                <MDBCol
                  md="3"
                  lg="5"
                  className=" d-flex flex-column justify-content-start"
                >
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size="lg" />
                    <MDBInput
                      label="Current Password"
                      name="currentPassword"
                      id="form3"
                      type="password"
                      required
                    />
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size="lg" />
                    <MDBInput
                      label="Enter New Password"
                      name="newPassword"
                      id="form3"
                      type="password"
                      required
                    />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="key me-3" size="lg" />
                    <MDBInput
                      label="Confirm New password"
                      name="cnfPassword"
                      id="form4"
                      type="password"
                      required
                    />
                  </div>
                </MDBCol>
              </MDBRow>
            </form>
            <MDBBtn className="mx-2" size="md">
              Update
            </MDBBtn>
          </MDBContainer>
        </MDBTabsPane>
        {/* Generate Password Tab End here */}

        {/* ----------------------------- */}

        {/* Delete Account Tab Starts here */}

        <MDBTabsPane show={basicActive === 'tab3'}>
          <div className="d-flex flex-column mb-1">
            <div className="p-2">
              <h6>Delete Account</h6>
            </div>
          </div>
          <MDBRow>
            <MDBCol className="mx-2">
              <div className="mb-2">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Reason 1"
                />
              </div>
              <div className="mb-2">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Reason 2"
                />
              </div>
              <div className="mb-2">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Reason 3"
                />
              </div>
              <div className="mb-2">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Reason 4"
                />
              </div>
              <MDBBtn size="md">Delete Account</MDBBtn>
            </MDBCol>
          </MDBRow>
          <MDBRow className="m-1 mt-5">
            <MDBCol>
              <div>
                <h5 className="h4 fw-bold mb-3">
                  Instructions for the Candidate
                </h5>
                <MDBRow className="d-flex justify-content-evenly">
                  <MDBCol className="mb-3">
                    <ol>
                      <li>
                        Save delete reason for every user and change the user
                        state in DB(Database) from 1 to 0 where 1 is active and
                        0 is deleted.
                      </li>
                      <li>
                        Deleted user cannot login and it will give error - Your
                        account is deleted, please contact website admin to
                        re-activated your account.
                      </li>
                    </ol>
                  </MDBCol>
                </MDBRow>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBTabsPane>

        {/* Delete Account Tab end here */}

        {/* ------------------------------------ */}

        {/* Payment Method Tab Start here */}

        <MDBTabsPane show={basicActive === 'tab4'}>
          <div className="d-flex flex-column mb-3">
            <div className="p-2 mx-2">
              <h6>Select Plan</h6>
            </div>
          </div>
          <div className="row align-items-center mx-3">
            <div className="col text-center border border-secondary rounded-5 p-3 me-4">
              <MDBCardTitle>Plan A</MDBCardTitle>
              <MDBCardText>₹999</MDBCardText>
              <MDBBtn data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={handleModal}>Select</MDBBtn>
              {openModal ? <PaymentModal  open={openModal}  closeModal={handleModalClick} handleSave={addCreditCard}/> : null}
            </div>
            <div className="col text-center border border-secondary rounded-5 p-3 me-4">
              <MDBCardTitle>Plan B</MDBCardTitle>
              <MDBCardText>₹1999</MDBCardText>
              <MDBBtn data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={handleModal}>Select</MDBBtn>
              {openModal ? <PaymentModal  open={openModal}  closeModal={handleModalClick} handleSave={addCreditCard}/> : null}
            </div>
            <div className="col text-center border border-secondary rounded-5 p-3 me-4">
              <MDBCardTitle>Plan C</MDBCardTitle>
              <MDBCardText>₹2999</MDBCardText>
              <MDBBtn data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={handleModal}>Select</MDBBtn>
              {openModal ? <PaymentModal  open={openModal}  closeModal={handleModalClick} handleSave={addCreditCard}/> : null}
            </div>
          </div>
          <MDBRow className="m-1 mt-5">
            <MDBCol>
              <div>
                <h5 className="h4 fw-bold mb-3">
                  Instructions for the Candidate
                </h5>
                <MDBRow className="d-flex justify-content-evenly">
                  <MDBCol className="mb-3">
                    <ol>
                      <li>
                        Users will need to make the payment for there profile
                        using the payment options above.
                      </li>
                      <li>
                        On selecting select button user will be redirected to
                        payment's page.
                      </li>
                    </ol>
                  </MDBCol>
                </MDBRow>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBTabsPane>

        {/* Payment Method Tab End Here */}

        {/* ---------------------------------------------- */}
      </MDBTabsContent>
    </div>
  )
}

export default PersonalDetails
