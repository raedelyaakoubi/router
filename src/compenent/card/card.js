import "bootstrap/dist/css/bootstrap.min.css";
import { Rating } from 'react-simple-star-rating'
import { Link } from "react-router-dom";
function Card(props) {
  return(
    <div className="ca"> 
    
  <div className="card" >
  <img src={props.Img} className="card-img-top" alt="..."/>
    <div className="card-body">

      <h5 className="card-title">{props.title} <i  onClick={()=>props.deleteCard(props.id)} className="fa-solid fa-trash"></i> </h5>
      
    <Rating iconsCount={5} readonly={true} initialValue={props.rating} />
    <br/>
 <Link  to={`/details/${props.id}`}><button className="btn btn-dark">SEE MORE</button></Link>
    </div>
  </div>
</div>

  )
  }

    export default Card;