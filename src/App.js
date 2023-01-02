import "./App.css";
import Info from "./info";
import Nav from "./nav/nav";
import React, { useState } from 'react';

import { Route,Routes, } from "react-router-dom";
import Add from "./compenent/Add/Add";
import Home from "./compenent/Home/Home";
import MovieDetails from "./compenent/MovieDetails/MovieDetails";
function App(title,desc,rating1,url) {

  const [Newadd,setNewadd]=useState(Info)
  
    const addMovie=(title,desc,rating1 ,url,id)=>{
    setNewadd([...Newadd,{description:desc,title,rating:rating1,posteurl:url,id:Newadd.length+1}])
    
    }
    
      function deleteCard(idDelete){
        setNewadd(Newadd.filter((el)=>el.id!==idDelete))}
      
      
    
      
 return (<> 
  <Nav />
  <Routes>
  <Route  path="/add" element={<Add addMovie={addMovie} />}  ></Route>
  <Route path="/"   element={<Home deleteCard={deleteCard}  Newadd={Newadd} />}></Route>
  <Route path="/details/:x" element={<MovieDetails Newadd={Newadd}/>}/>
  </Routes>
    </>
  );
}

export default App; 
