import React, { useEffect, useState } from 'react'
import {Row,Col} from 'react-bootstrap'
import MediaCard from './MediaCard'
import { getAllVideo } from '../services/allAPI'


function View({uploadVideoServerResponse}) {
  const [allVideos,setAllVideos] = useState([])
  const[deleteVideoStatus,setDeleteVideoStatus]=useState(false)
const getAllUploadedVideo = async ()=>{
  const {data} = await getAllVideo();
  setAllVideos(data);
}
useEffect(() => {
  getAllUploadedVideo()
  setDeleteVideoStatus(false)
  }, [uploadVideoServerResponse,deleteVideoStatus])
  // console.log(allVideos);

  return (
    <>
    <Row>
      {
        allVideos.length>0?
      allVideos.map(video=>(
<Col sm={12} md={6} lg={4} xl={3}>
  <MediaCard displayData={video} setDeleteVideoStatus={setDeleteVideoStatus}/>
</Col>
      )):<p className='fw-border text-danger fs-5'>Nothing to Display</p>
}
    </Row>
      
    </>
  )
}

export default View