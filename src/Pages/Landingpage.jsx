import React from 'react'
import {Col,Row} from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import {useNavigate} from 'react-router-dom'
function Landingpage() {
  const navigateByUrl=useNavigate()
  return (
    <>
<Row className='mt-5 align-items-center justify-content-between w-100'>
  <Col lg={7} style={{marginLeft:"120px"}}>
<h1 style={{textAlign:"justify"}}> <b> Welcome To <span className='text-warning'>Media Player</span> </b> </h1><br />
<p className='text-white'>Welcome to our  media player website, where seamless audio and video playback 
meet intuitive design. Immerse yourself in a rich multimedia experience with our user-friendly interface, offering 
a range of features including playlist management, customizable audio settings, and responsive design for optimal
 viewing on any device. Whether you're a music enthusiast or a cinephile, our media player is designed to elevate
  your entertainment journey with a sleek, modern, and accessible platform. Explore the possibilities and enjoy a 
  personalized and dynamic playback experience like never before.
  </p>
<button className='mt-4 btn btn-success' onClick={()=>navigateByUrl('/home')}>Get Started</button>
</Col>
<Col></Col>
  <Col lg={2}>
  <img src="https://media1.tenor.com/m/1I_jiI9wXHUAAAAC/music-visualizer.gif" height={'350px'} width={'300px'} alt="" />

  </Col>
  <Col></Col>
</Row>
<div className='container mb-5 mt-5 d-flex align-items-center justify-content-center flex-column'>
  <h3><b>Features</b></h3>
  <div className='cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100'>
  <Card className='p-5' style={{ width: '22rem' }}>
      <Card.Img height={'290px'} width={'300px'} variant="top" src="https://i.pinimg.com/originals/f2/0f/0e/f20f0e1d1c073825b501e353bb474a29.gif" />
      <Card.Body>
        <Card.Title className='text-white'><b>Managing <span className='text-warning'>Video</span></b> </Card.Title> <br />
        <Card.Text className='text-white'>
        Implementing video management for your media player website involves creating a backend system to handle 
        video metadata, such as title, duration, and thumbnail information.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='p-5' style={{ width: '22rem' }}>
      <Card.Img height={'290px'} width={'300px'} variant="top" src="https://i.pinimg.com/originals/2c/3e/36/2c3e3601417d982fe0cd77635c4dfb27.gif" />
      <Card.Body>
        <Card.Title className='text-white'><b>Categorize <span className='text-warning'>Videos</span></b> </Card.Title> <br />
        <Card.Text className='text-white'>
        Categorize videos by assigning relevant tags or labels based on genre, theme, or content type to
         facilitate organized and efficient browsing for users on the media player website.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='p-5' style={{ width: '22rem' }}>
      <Card.Img height={'300px'} width={'300px'} variant="top" src="https://media3.giphy.com/media/QKN0IVrQKSmbe/giphy.gif" />
      <Card.Body>
        <Card.Title className='text-white'><b>Watch <span className='text-warning'> History</span></b> </Card.Title> <br />
        <Card.Text className='text-white'>
        Track and display users' watch history, allowing them to conveniently resume playback from previously 
        viewed videos on the media player website.
        </Card.Text>
      </Card.Body>
    </Card>
</div>
</div>
<div className="container border rounded p-5 border-secondary b-5 mt-5 d-flex align-items-center 
justify-content-between w-100 ">
  <div className="col-lg-5">
    <h3 className='mb-5 text-white'><b>Simple,Powerful<span className='text-warning'> & Fast</span></b></h3>
    <h6 className='mn-5'><span className='fs-5 fw-border text-white'><b> Play <span className='text-warning'> Everything
    </span></b> </span>:Enable users to 
    effortlessly enjoy a seamless multimedia experience by implementing a "Play Everything" feature, allowing 
    continuous playback of all available audio and video content on the media player website with a single click. 
    This feature enhances user convenience and promotes a continuous entertainment flow.
    </h6>
    <h6 className='mn-5' ><span className='fs-5 fw-border text-white'><b>Categorize <span className='text-warning'>Videos</span></b></span> :
    Organize videos systematically by implementing a categorization system that assigns relevant tags or labels 
    based on genre, theme, or content type, facilitating easy navigation and content discovery for users on the 
    media player website. This enhances user experience by providing a structured and efficient way to explore a 
    diverse range of video content.</h6>
    <h6 className='mn-5'><span className='fs-5 fw-border text-white'><b>Managing <span className='text-warning'> History</span></b></span>:
    Implement a watch history feature that tracks and displays users' previously viewed videos, enabling
     them to conveniently review and resume playback from their viewing history on the media player website.
      This enhances user engagement and offers a personalized experience by allowing users to revisit content of
       interest easily.
   </h6>
  </div>
<div className="video col col-lg-6">
  
{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/p2-oIg8vE0Y?si=wUyWTCJhG60k-ToO" 
title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
 gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
<iframe width="560" height="315" src="https://www.youtube.com/embed/Nzpyo96Olk4?list=PLQtc-d4NpMzGLC69P1Grh1PV_OYlqvv_2"
 title="CrazyEightyEight - Shinebox [Official Video]" frameborder="0" 
 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen></iframe>

</div>


</div>


    </>

  )
}


export default Landingpage