import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Signup from './Pages/Signup';
import Products from './Pages/Products';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Counter from './Components/Counter';
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from './Components/Card';
import Carousal from './Components/Carousal';
import Login from "./Pages/Login"
import Dashboard from "./Pages/Dashboard"


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Signup/" element={<Signup />}></Route>
        <Route path="/Products" element={<Products />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>

  );
}

export default App;
