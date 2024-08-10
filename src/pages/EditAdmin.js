import { Component } from "react";
import AddAdminService from "../services/admin.service";
import {crudRouter} from "../Crud-router";
class EditAdmin extends Component{
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
                this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);    
        this.editAdmin = this.editAdmin.bind(this); 
        this.getAdmin = this.getAdmin.bind(this);    
            this.state = {
                selectAdmin : {
                    id: null,        
                    name:"",
                 email:"",
                    password:"",
               }              

        };
      }
      componentDidMount(){
        this.getAdmin(this.props.router.params.id)
      }
   onChangeName(e) {
    const name = e.target.value;
    this.setState(function(prevState){
        return{
            selectAdmin :{
...prevState.selectAdmin,
name:name,

            }
        }
    })
   }  
   onChangeEmail(e) {
    const email = e.target.value;
    this.setState(function(prevState){
        return{
            selectAdmin :{
...prevState.selectAdmin,
email:email,

            }
        }
    })
   }  
   onChangePassword(e) {
    const password = e.target.value;
    this.setState(function(prevState){
        return{
            selectAdmin :{
...prevState.selectAdmin,
password:password,

            }
        }
    })
   } 
   //get admin by id// 
   getAdmin(id) {
    AddAdminService.get(id)
    .then(response =>{this.setState({
      selectAdmin :response.data,
    });
  console.log (response.data);
  
  })
  .catch(err => {
    console.log (err);
  })
  
  }
  //function update admin//
  editAdmin(){
    AddAdminService.update(
this.state.selectAdmin.id,
this.state.selectAdmin
    )
    .then(response => {
        console.log(response.data);
        this.props.router.navigate('/admin')
    })
    .catch(err =>{
        console.log(err);        
    });
  }
  render() {
    const { selectAdmin } = this.state;
    return(
<div>
{selectAdmin ? (
        <div className="container">
            <div className="row">                
<div className="col-4">
<input type="text" className="form-control" id="name" value={selectAdmin.name}
 onChange={this.onChangeName}/>
</div>
<div className="col-4">
<input type="text" className="form-control" id="email" value={selectAdmin.email}
 onChange={this.onChangeEmail}/>    
</div>
<div className="col-4">
<input type="text" className="form-control" id="password" value={selectAdmin.password}
 onChange={this.onChangePassword}/>
    
</div>


<div className="col-12">
    <button className="btn btn-success" onClick={this.editAdmin}>Edit admin</button>
</div>
            </div>        
        </div>
        ):(
    <h1>Admin modified</h1>      
    )};
</div>

    )
  }
}
export default crudRouter(EditAdmin);