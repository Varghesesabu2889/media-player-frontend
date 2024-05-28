import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Modal,Button } from 'react-bootstrap'
import { DeleteAVideo, addToHistory } from '../services/allAPI';
function MediaCard({displayData,setDeleteVideoStatus,insideCategory}){


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow =  async()=>{

  setShow(true);


//make api call to  http://localhost:4000/history

const {caption,embedLink}=displayData
let today = new Date()
// console.log(today);

let timeStamp =(new Intl.DateTimeFormat('en-US',{day:'2-digit', month:'2-digit',
year:'numeric',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today))


let videoDetails={
  caption,embedLink,timeStamp
}
await addToHistory(videoDetails)
}










//delete a video

const removeVideo = async (id) => {
  // make api call
  const response = await DeleteAVideo(id)
  setDeleteVideoStatus(true)
}


const dragStarted =(e,id)=>{
  console.log("drag started..card Id:"+id);
  e.dataTransfer.setData('videoId',id)
}




  return (

    
    <>
    <Card style={{ width: '18rem' }} className='mt-3'draggable onDragStart={(e)=>dragStarted(e,displayData?.id)} >
      <Card.Img variant="top" onClick={handleShow} src={displayData?.url} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
          <h6>{displayData?.caption}</h6>
          {insideCategory?"":<button className='btn' onClick={()=>removeVideo(displayData?.id)}><i class="fa-solid fa-trash text-danger"></i></button>}

        </Card.Title>
      </Card.Body>
    </Card>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
    <Modal.Header closeButton>
          <Modal.Title>Video Player</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width={"100%"} height="526" src={`${displayData?.embedLink}?autoplay=1`} 
        title={displayData?.caption}
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>
      
    </>





  )
}
export default MediaCard