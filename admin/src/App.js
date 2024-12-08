
import Faq from "./Components/App/pages/Faq";
import Contact from "./Components/App/pages/Contact"
import Profile from "./Components/App/pages/Profile"
import "./assets/css/style.css"
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css"
import { Route,Routes } from "react-router-dom";
import Register from "./Components/App/pages/Register";
import Login from "./Components/App/pages/Login";
import Error404 from "./Components/App/pages/Error404";
import Dashboard from "./Components/App/pages/Dashboard"
import Layout from "./Components/Static/layout/Layout";
import { ToastContainer } from "react-toastify";
import Products from "./Components/App/pages/Products";
import Forgot from "./Components/App/pages/Forgot"
import Protected from "./Components/Utils/Protected";
import Categories from "./Components/App/pages/Categories";

function App() {
 
  return (
  
 <div className="App">  
 <>   
   
   <Routes>
    
          <Route path="/admin" element={<Protected Component={Layout}/>}>
            <Route path="/admin/profile" element={<Protected Component={Profile}/>}/>
              <Route path="/admin/dashboard" element={<Protected Component={Dashboard}/>}/>
              <Route path="/admin/contact" element={<Protected Component={Contact}/>}/>
              <Route path="/admin/faq" element={<Protected Component={Faq}/>}/>
              <Route path="/admin/products" element={<Protected Component={Products}/>}/>
              <Route path="/admin/categories" element={<Protected Component={Categories}/>}/>

                  </Route>
                  
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/forgot" element={<Forgot/>}></Route>
                <Route path="/*" element={<Error404/>}></Route>
          
   </Routes>
    <ToastContainer 
    autoclose={1000}
    />
   
   </>   
    </div>
  );
}

export default App;
