import { Link, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';
import EventBus from "../../auth/Event";
import { Component } from "react";
import AuthService from "../../services/auth.service"   
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {      
      showAdminBoard: false,
      showModeratorBoard : false,
      showFormateurBoard: false,
      currentUser: undefined,
    };
      }
      componentDidMount() {
        const user = AuthService.getCurrentUser();
    
        if (user) {
          this.setState({
            currentUser: user,           
            showAdminBoard: user.roles.includes("ROLE_ADMIN"),
            showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
            showFormateurBoard: user.roles.includes("ROLE_FORMATEUR"),
                     });
        }
        
        EventBus.on("logout", () => {
          this.logOut();
        });
      }
      logOut() {
        AuthService.logout();
        this.setState({         
          showAdminBoard: false,    
          showModeratorBoard: false, 
          showFormateurBoard: false,      
          currentUser: undefined,
        });
      }
      render () {
        const { currentUser,showAdminBoard,showModeratorBoard,showFormateurBoard} = this.state;
    return(
        <>
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand"to='/'>Accueil</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/profil'>Profil</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/login'>Login</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown</Link>
          
          <ul className="dropdown-menu">
            <li><Link to='/contact'  className="dropdown-item" >Action</Link></li>            
            <li><hr className="dropdown-divider"/></li>
            
            <li><Link to='/contact' className="dropdown-item" >Something else here</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to='/register'>Register</Link>
        </li>
      </ul>
      {currentUser && (
              <li className="nav-item">
              <Link className="nav-link user" to='/user-home'>User home</Link>
            </li>
            )}
            {showAdminBoard && (
              <li className="nav-item">
              <Link className="nav-link" to='/admin-home'>Admin home</Link>
            </li>
            )}
            {showModeratorBoard && (
              <li className="nav-item">
              <Link className="nav-link" to='/moderator-home'>moderator home</Link>
            </li>
            )}
            {showFormateurBoard && (
              <li className="nav-item">
              <Link className="nav-link" to='/formateur-home'>formateur home</Link>
            </li>
            )}
             {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profil"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">              

              
            </div>
          )}
            
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        <Outlet />
        </>
    )
  }
    };
export default Navbar;

