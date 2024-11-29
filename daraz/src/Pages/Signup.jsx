import React,{useState} from 'react';
import './Signup.css'; // Ensure you have custom styles here
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Link, useNavigate} from "react-router-dom"
import axios from "axios"
import { toast } from 'react-toastify';

const Signup = () => {
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    phone:"",
    password:""
  })
const {name,email,phone,password}=formData;
const navigate=useNavigate();
const onChange=(e)=>{
  setFormData({...formData,[e.target.name]:e.target.value})
}
const onSubmit=async(e)=>{
  e.preventDefault();
  const response=await axios.post(`${process.env.REACT_APP_BASE_URL}/user`,formData)
  if(response.data.success){
    toast.success(response.data.message)
    setFormData({
      name:"",
      email:"",
      phone:"",
      password:""
    })
    navigate("/login")
  }
}
  return (
    <div className='login-form'>
      <h1>Welcome To Daraz!</h1>
      <Form className='input-form' onSubmit={onSubmit}>
        <h2>Signup to your Account</h2>
        <Form.Group className="mb-4" controlId="formName">
          <Form.Control type="Name" placeholder="Name*" name='name' value={name} onChange={onChange} required />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formnumber">
          <Form.Control type="number" placeholder="Phone number*" name='phone' onChange={onChange} value={phone} required />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formEmail">
          <Form.Control type="email" placeholder="Email*" name='email' onChange={onChange} value={email} required />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formPassword">
          <Form.Control type="password" placeholder="Password*" name='password' onChange={onChange} value={password} required />
        </Form.Group>
        <Button variant="danger" type="submit" className="custom-button w-100">
          Signup
        </Button>
        <p className="forgot-password">
          <Link to="/forgot-password" className="toggle-link1">Forgot Password?</Link>
        </p>
        <p className="toggle-form-text">
          Don't have an account? <Link to="/login" className="toggle-link2">Login</Link>
        </p>
      </Form>
    </div>
  )
}

export default Signup