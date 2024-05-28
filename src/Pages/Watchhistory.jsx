import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getAllHistory } from '../services/allAPI'



function Watchhistory() {


const [history,setHistory]=useState([])
const  handleHistory = async  () =>{
//make api call
const {data} = await getAllHistory()
// console.log(data)
setHistory(data);
}
console.log(history);

useEffect(()=>{
  handleHistory()
  },[])


const handleDeleteHistory= async  (id)=>{
  //make api call
  await  deleteHistory (id)
  // return remaining history
  handleHistory()
}




  return (
    <>
    <div className='container mt-5 mb-5 d-flex justify-content-between'>
      <h3>Watch-History</h3>
      <Link to={'/home'} style={{textDecoration:'none',fontSize:'20px',color:"blueviolet"}}>
      <i class="fa-solid fa-circle-arrow-left">Back To Home</i>
         </Link>
    </div>
    <table className='table mt-5 mb-5 container'>
      <thead>
<th>#</th>
<th>Name</th>
<th>URL</th>
<th>TimeStap</th>
<th>Action</th>
      </thead>
      <tbody>
        {
          history.length>0?history?.map((item,index)=>(
        <tr key={item?.id}>
        <td>{index+1}</td>
        <td>{item?.caption}</td>
        <td><a href={item?.embedLink}target='_blank'>{item?.embedLink}</a></td>
        <td>{item.timeStamp}</td>
        <td><button className='btn' onClick={()=>handleDeleteHistory(item?.id)}><i class="fa-solid fa-trash text-danger"></i></button></td>
        </tr>
          )):<p className='fw-border text-danger fs-5'>Nothing to Display</p>
}
      </tbody>
    </table>
    </>
  )
}

export default Watchhistory