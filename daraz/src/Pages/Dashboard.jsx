import React, { useState, useEffect } from 'react'
import {jwtDecode} from 'jwt-decode'
import axios from 'axios'

const Dashboard = () => {
    const [id, setId] = useState(null)
    const [user, setUser] = useState(null)

    // Function to fetch token and decode it
    const fetchToken = () => {
        const token = localStorage.getItem("token")
        if (token) {
            const decodedToken = jwtDecode(token)
            setId(decodedToken.id) // Set id from the decoded token
        }
    }

    // Function to fetch user details based on the id
    const fetchUser = async () => {
        if (id) { // Ensure id is available before making the API call
            try {
                const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/user/${id}`)
                setUser(response.data.user) // Set user data
            } catch (error) {
                console.error("Error fetching user:", error)
            }
        }
    }

    // Fetch token once when the component mounts
    useEffect(() => {
        fetchToken()
    }, [])

    // Fetch user when id changes
    useEffect(() => {
        fetchUser()
    }, [id])

    return (
        <>
            <h1 style={{ marginTop: "100px" }}>
                Welcome {user?.name || "Guest"} to Dashboard
            </h1>
        </>
    )
}

export default Dashboard
