import { Link } from 'react-router-dom';
function Nav(){

return (
<nav id="na" className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
   
      <>
     <Link to="/add" > <button className="btn btn-outline-success"  >ADD</button></Link>
      <Link to="/" > <button className="btn btn-outline-success"  >Back</button></Link> 
      </>
    </div>
  
</nav>

)}
  export default Nav ;
  