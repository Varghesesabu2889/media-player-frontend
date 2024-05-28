import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div>
         <Navbar className="bg-body-primary">
        <Container>
          <Navbar.Brand href="#home">
            <Link to={'/'} style={{textDecoration:"none", color:"white",fontSize:"30px"}}>
            <img
              alt=""
              src="https://learningprofessor.com/wp-content/uploads/2020/03/video.png"
              width="60"
              height="50"
              className="d-inline-block align-top ms-3"
            />{' '}
           <b className='text-white'> Media <span className='text-warning'>Player</span></b>
           </Link>

          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header