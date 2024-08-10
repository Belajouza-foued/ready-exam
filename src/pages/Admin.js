
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import image from'../pages/images/my face.jpg';
import   '../pages/styles/Admin.css';
import { Component } from 'react';
import AdminDataService from '../services/admin.service';
export default class ListAdmin extends Component{
  constructor (props) {
    super (props);
    //input search admin
    this.onchangeSearchName = this.onchangeSearchName.bind(this);
    //get all admins
    this.getAdmins = this.getAdmins.bind(this);
    //activ admin
    this.setActiveAdmin = this.setActiveAdmin.bind(this);
    //actualiser la page   
    this.refreshListAdmin = this.refreshListAdmin.bind(this);
    //afficher list adminpar nom
    this.searchByName = this.searchByName.bind(this);
    this.deleteAllAdmin = this.deleteAllAdmin.bind(this);



this.state = {
  admins: [],
  searchName: "",
  adminCourant: null,
  index: -1
};

  }
componentDidMount(){
    this.getAdmins();
}
  onchangeSearchName(e) {
    const searchName =e.target.value;
    this.setState({
      searchName:searchName,
    });    
  }
getAdmins () {
    AdminDataService.getAll ()
  .then(response =>{this.setState({
    admins :response.data,
  });
console.log (response.data);

})
.catch(err => {
  console.log (err);
})

}
refreshListAdmin() {
  this.getAdmins ();
  this.setState ({
    adminCourant: null,
    index: -1
  })
}
setActiveAdmin(admin , index) {  
  this.setState({
  adminCourant : admin,
  index : index
});
}
searchByName(){
    AdminDataService.findByTitle(this.state.searchName)
    .then(response => {
        this.setState({
            admins: response.data

        }); 
        console.log(response.data)
    })
    .catch(err=>{
        console.log(err);
    });
}
deleteAllAdmin(){
    AdminDataService.deleteAll()
  .then(response => {
    console.log(response.data);
    this.refreshListAdmin();
  })
  .catch(e => {
    console.log(e)
  });
}


render () {
  const {searchName , admins, adminCourant , indexCourant }= this.state; 
  return ( 
    <>
 <div className="container-fluid">
   <div className="row">
    <div className="col-3">
    < Link to={'/addAdmin'}className='btn btn-success btn-position me-4'>Add new admin</Link>
    < button className='btn btn-danger btn-position' onClick={this.deleteAllAdmin}>Delete all admins</button>
    </div>
    <div className='col-9'>
      
    <div className="input-group">
        <input  className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchName} onChange={this.onchangeSearchName}/>
        <button className="btn btn-outline-success" type="submit" onClick={this.searchByName} >Search</button>
      </div>
    </div>
     <div className="col-12">
       <h1>Admin list</h1>
                
       <table className="table align-middle mb-0 bg-white">
<thead className="bg-light">
 <tr>
   <th>photo</th>
   <th>Name</th>
   <th>email</th>
   <th>password</th>
   <th>update</th>
   <th>delete</th>
 
 </tr>
</thead>
<tbody>
  {admins && admins.map((
    admin, index)=>(    // eslint-disable-next-line no-unused-vars

 <tr className={+(indexCourant === adminCourant ? "active": "")} onClick={() => this.setActiveAdmin(admin, index)} key={index}>  
   <td>
     <div className="d-flex align-items-center">
       <img
           src={image}
           alt=""         
                     className="rounded-circle"
           />
       
     </div>
   </td>
   <td>
    <p>{admin.name}</p>
    </td>  
    
    <td>
    <p>{admin.email}</p>
    </td> 
    <td>
    <p>{admin.password}</p>
    </td>   
      
    
<td>
     <Link to={"/admin/"+ admin.id} type="button" className="btn btn-warning">
       Edit
     </Link>
   </td>
   <td>
     <Link to={"/admin/"+ admin.id} type="delete" className="btn btn-danger">
       Delete
     </Link>
   </td>
 </tr>
 ))}

</tbody>
</table>
     </div>
   </div>
 </div>
</>)
}
  
}
    
  


