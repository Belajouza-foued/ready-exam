import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import '../pages/styles/Accueil.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {faGraduationCap,faUserTie} from '@fortawesome/free-solid-svg-icons';
const Accueil  = () => {
    return(
        <>
        <div className='container'>
        <div className='row'>
            <div className='col-3'>
            <div className="card text-center bg-success-subtle" >
             
            <FontAwesomeIcon icon={faUserTie} />
  <div className="card-body">
    <h5 className="card-title"> Admin</h5>
    <p className="card-text">Example:Students,Instructors,Team,Admin</p>
    <Link to={'/admin'} className="btn btn-success btn-size">Add</Link>
  </div>
</div>  
            </div>
            <div className='col-3'>
            <div className="card text-center bg-warning-subtle" >
              <i className='fa fa-students'></i>
              <i className="fa-solid fa-graduation-cap"></i>
              <FontAwesomeIcon icon={faGraduationCap} />
  <div className="card-body">
    <h5 className="card-title"> Students</h5>
    <p className="card-text">Facilate the addition of new students in platform</p>
    <Link to={'/student'} className="btn btn-success btn-size">Add</Link> 

  </div>
</div>  

            </div>
           
            </div>
            <br></br>
            
           
        </div>    
       
        </>
        
    );
 
  
};
export default Accueil;
