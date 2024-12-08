import { useState } from "react"
import React from 'react'
import axios from "axios"
import { toast } from "react-toastify"

const Categories = () => {
    const [title, setTitle] = useState("")
    const onSubmit=async(e)=>{
        e.preventDefault();
        const response=await axios.post("http://localhost:8082/api/category",{title:title})
       if(response.data.success){
        setTitle("")
        toast.success("Category added successfully")
       }
    }
    return (
        <div style={{ marginLeft: "300px", marginTop: "200px" }} className="d-flex justify-content-center align-items-center">
            <form onSubmit={onSubmit}>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Category Title</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter category Title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Categories