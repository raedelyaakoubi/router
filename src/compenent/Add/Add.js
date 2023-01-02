import React from 'react';
import { useState } from 'react';
import { Link} from 'react-router-dom';

function Add({addMovie}){

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [url,setUrl]= useState("")
    const [rating,setRating]= useState("")
 
    const handldeClick=()=>{
      addMovie(title,desc,rating,url) 
     setTitle("")
     setDesc("")
     setUrl("")
     setRating("")
      }

  return (
    <div>
    <input className="form-control me-2"  placeholder="add title"  value={title} onChange={(e) => setTitle(e.target.value)} />
    <input className="form-control me-2"  placeholder="add desc" value={desc} onChange={(e) => setDesc(e.target.value)}/>
    <input className="form-control me-2"  placeholder="add poste URL"  value={url} onChange={(e) => setUrl(e.target.value)}/>
    <input className="form-control me-2"  placeholder="add rating" type="number" value={rating} onChange={(e) => setRating(e.target.value)}/>
     <Link to="/"><button className="btn btn-outline-success"  onClick={()=>handldeClick()} >save</button></Link>
    
  </div>
  )
}

export default Add