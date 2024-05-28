import { commonAPI } from "./commonAPI";
import { serviceUrl } from "./serviceUrl";

//upload video

export const uploadVideo = async (reqBody)=>{
    // make POST http request `http://localhost:4000/videos` to add videoes to the json server return responce to the
    //add component


return await commonAPI ("POST",`${serviceUrl}/videos`,reqBody)

}

//get all videos from json

export const getAllVideo = async ()=>{
    // make GET http request `http://localhost:4000/videos` to add videos to the json server return response to the
    //to the view component
    return await commonAPI ("GET",`${serviceUrl}/videos`,"")
}

//get a single video

export const getAVideo = async (id)=>{
    // make GET http request `http://localhost:4000/videos/id` to add videos to the json server return response to the
    //to the media card component
    return await commonAPI ("GET",`${serviceUrl}/videos/${id}`,"")
}
//delete a single video

export const DeleteAVideo = async (id)=>{
    // make DELETE http request `http://localhost:4000/videos/id` to add videos to the json server return response to the
    //to the media card component
    return await commonAPI ("DELETE",`${serviceUrl}/videos/${id}`,{})
}

export const addToHistory = async (videoDetails)=>{
    // make POST http request `http://localhost:4000/history` to store videos to 
    //the json server return response to the to the Mediacard component
    return await commonAPI ("POST",`${serviceUrl}/history`,videoDetails)
}

export const getAllHistory = async ()=>{
    // make POST http request `http://localhost:4000/history` to store videos to the json server return response to the
    //to the watch-history component
    return await commonAPI ("GET",`${serviceUrl}/history`,"")
}



export const deleteHistory = async (id)=>{
    // make POST http request `http://localhost:4000/history/id` to delete videos from the json server return response to the
    //to the watch-history component
    return await commonAPI ("DELETE",`${serviceUrl}/history/${id}`,{})
}









// add to category
export const addToCategory = async (reqBody)=>{
    // make POST http request `http://localhost:4000/category` to store videos to 
    //the json server return response to the to the Category component
    return await commonAPI ("POST",`${serviceUrl}/categorize`,reqBody)
}

//get all  categories
export const getAllCategory=async()=>{
     // make GET http request `http://localhost:4000/category` to store videos to 
    //the json server return response to the to the Category component
    return await commonAPI ("GET",`${serviceUrl}/categorize`,"")
}
//delete all  categories
export const deleteCategory=async(id)=>{
    // make GET http request `http://localhost:4000/category` to delete videos to 
   //the json server return response to the to the Category component
   return await commonAPI ("DELETE",`${serviceUrl}/categorize/${id}`,{})
}

//update categories
export const updateCategory=(id,body)=> {
   //make PUT http request "http://localhost:4000/categories" to update videos from
   // the json server return response to the category componrnt
    return commonAPI("PUT", `${serviceUrl}/categorize/${id}`,body)

}

