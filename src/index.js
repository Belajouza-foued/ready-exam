import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from'./pages/Accueil';
import Navbar from './components/navbar/Navbar';
import Register from './pages/Register';
import Profil from "./pages/Profil";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Student from "./pages/Student";
import AddAdmin from "./pages/AddAdmin";
import EditAdmin from "./pages/EditAdmin"
import UserHome from "./pages/User.home";
import AdminHome from "./pages/Admin.home";
import ModeratorHome from "./pages/ModeratorHome";
import FormateurHome from "./pages/FormateurHome";


export default function App(){
  return(
    <>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Navbar/>}>
    <Route index element={<Accueil/>}/>
 <Route path="profil" element={<Profil/>}></Route>
 <Route path="login" element={<Login/>}></Route>
 <Route path="register" element={<Register/>}></Route>
 <Route path="student" element={<Student/>}></Route>
 <Route path="admin" element={<Admin/>}></Route>
 <Route path="addAdmin" element={<AddAdmin/>}></Route>
 <Route path="admin/:id" element={<EditAdmin/>}></Route>
 <Route path="user-home" element={<UserHome/>}></Route>
 <Route path="admin-home" element={<AdminHome/>}></Route>
 <Route path="moderator-home" element={<ModeratorHome/>}></Route>
 <Route path="formateur-home" element={<FormateurHome/>}></Route>

 


 
  </Route>


</Routes>



</BrowserRouter>


</>
  );
}
const root =  ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);