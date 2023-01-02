import React from 'react'
import { useParams } from 'react-router-dom'

function MovieDetails({Newadd}) {
  const obj = useParams()
  const info=Newadd.find(el => el.id == obj.x);
  return (
    <div>
      <h3 id="des">{info.description}</h3>
      <iframe width="1000" height="415" src={info.posteurl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
  )
}

export default MovieDetails;