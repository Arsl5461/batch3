import React, { useState } from 'react';
import './Signup.css'; // Ensure you have custom styles here
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios';
import { toast } from 'react-toastify';


const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const navigate=useNavigate();
    const { email, password } = formData;
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/user/login`, formData)
        if (response.data.succes) {
            localStorage.setItem("token",response.data.token)
            toast.success(response.data.message)
            setFormData({
                email:"",
                password:""
            })
            navigate("/dashboard")
        
        }
    }
    return (
        <div className='login-form'>
            <h1>Welcome To Daraz!</h1>
            <Form className='input-form' onSubmit={onSubmit}>
                <h2>Login to Your Account</h2>
                <Form.Group className="mb-4" controlId="formEmail">
                    <Form.Control type="email" placeholder="Email*" name='email' onChange={onChange} value={email} required />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formPassword">
                    <Form.Control type="password" placeholder="Password*" name='password' onChange={onChange} value={password} required />
                </Form.Group>
                <Button variant="danger" type="submit" className="custom-button w-100">
                    Login
                </Button>
                <p className="forgot-password">
                    <Link to="/forgot-password" className="toggle-link1">Forgot Password?</Link>
                </p>
                <p className="toggle-form-text">
                    Don't have an account? <Link to="/signup" className="toggle-link2">Sign up</Link>
                </p>
            </Form>
        </div>
    )
}

export default Login