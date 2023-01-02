import React from 'react'
import { useState } from 'react'
import { Rating } from 'react-simple-star-rating';
import Cards from "../cards/cards"

function Home({deleteCard,Newadd,addMovie}){
  const [search, setSearch]=useState("")
    
      const [rating, setRating] = useState(0)
    
      // Catch Rating value
      const handleRating = (rate) => {
        setRating(rate)
      } 
  return (
    <div>
        <input className="form-control me-2"  placeholder="SEARCH"  onChange={(e)=>setSearch(e.target.value)} />
    <Rating  onClick={handleRating} />
    <div >
      <Cards   deleteCard={deleteCard} 
            
    c={Newadd.filter((el)=>el.title.toLowerCase().includes(search.toLowerCase().trim())&& el.rating >=rating )}/> 
 
   
    </div></div>
  )}
  

export default Home;