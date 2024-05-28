/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <div>
 <MDBFooter bgColor='' className='text-center text-lg-start text-muted'>
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
              <i class="fa-solid fa-video fa-beat-fade" style={{color: "orange", fontSize:"40px"}}></i>&nbsp;&nbsp;
              Media <span className='text-warning'> Player</span> 
              </h6>
              <p className='text-white'>
              This Media player  is a website that is used to play digital videos. Its primary function is to decode and display multimedia content. 
              </p>
            </MDBCol>
            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Links</h6>
              <p>
                <a href='/' className='text-white'>
                  Landing Page
                </a>
              </p>
              <p>
                <a href='/home' className='text-white'>
                  Home Page
                </a>
              </p>
              <p>
                <a href='/watchhistory' className='text-white'>
                  Watch History
                </a>
              </p>
            </MDBCol>
            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Guides</h6>
              <p>
                <a href='#' className='text-white'>
                  React
                </a>
              </p>
              <p>
                <a href='#' className='text-white'>
                  React Bootstrap
                </a>
              </p>
              <p>
                <a href='#' className='text-white'>
                  Bootswatch
                </a>
              </p>
             </MDBCol>

             <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact<span className='text-warning'> Us</span></h6>
              <p>
                <MDBIcon color='secondary' className='me-2' />
                <input type="text" placeholder='Enter Your Email ID' />&nbsp;
                <MDBBtn rounded className='btn'  size='sm' color='danger' >Subscribe</MDBBtn>
              </p>
              <p>&nbsp;&nbsp;
              <MDBBtn className='m-1' style={{ backgroundColor: '#3b5998' }} target='value' href='https://www.facebook.com/varkychan.sabu'>
        <MDBIcon fab icon='facebook-f' />
      </MDBBtn>&nbsp;&nbsp;&nbsp;
      <MDBBtn className='m-1' style={{ backgroundColor: '#0082ca' }} target='value' href='www.linkedin.com/in/varghese-sabu-2b747b283'>
        <MDBIcon fab icon='linkedin-in' />
      </MDBBtn>&nbsp;&nbsp;&nbsp;
      <MDBBtn className='m-1' style={{ backgroundColor: '#333333' }} href=''target='value' >
        <MDBIcon fab icon='github' />
      </MDBBtn>&nbsp;
      <MDBBtn className='m-1' style={{ backgroundColor: '#25d366' }} target='value' href= 'https:wa.me/+918281072889'>
        <MDBIcon fab icon='whatsapp' />
      </MDBBtn>
              </p>
              <h6>
                Developed By: <span className='text-warning'>Varghese Sabu</span>
              </h6>

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-white text-center  p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-white fw-bold' href='/'>
          Media Player.Built With React
        </a>
      </div>
    </MDBFooter>


    </div>
  )
}

export default Footer