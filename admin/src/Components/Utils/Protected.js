import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
function Protected(props) {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) {
      navigate("/")
    }
  }, [navigate])
  return (
    <Component />

  )
}

export default Protected