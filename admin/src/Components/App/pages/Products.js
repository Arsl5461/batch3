import React, { useState,useEffect } from 'react';
import axios from "axios"
import { toast } from 'react-toastify';

const Products = () => {
  const [productData, setProductData] = useState({
    title: "",
    description: "",
    category: "",
    image: null,
  });
  const [categories, setCategories] = useState([]);
  const fetchCategory = async() =>{
    const response=await axios.get("http://localhost:8082/api/category")
    setCategories(response.data.categories)
  }
useEffect(()=>{
  fetchCategory()
},[])
  const onChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProductData({ ...productData, image: file });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", productData.title);
    formData.append("description", productData.description);
    formData.append("category", productData.category);
    formData.append("productimage", productData.image); // Append the file object

    // Example log to show the appended FormData
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }
    const response = await axios.post("http://localhost:8082/api/product", formData);
    if (response.data.success) {
      toast.success(response.data.message);
      window.location.reload();
    }
  }
  return (
    <>
      <div
        style={{ marginTop: "100px", marginLeft: "300px" }}
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="productTitle" className="form-label">Product Title</label>
            <input
              type="text"
              className="form-control"
              id="productTitle"
              name="title"
              placeholder="Enter product title"
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productDescription" className="form-label">Product Description</label>
            <textarea
              className="form-control"
              id="productDescription"
              name="description"
              rows="3"
              placeholder="Enter product description"
              onChange={onChange}
              required
            ></textarea>
          </div>
          <select class="form-select" aria-label="Default select example"  name="category" onChange={onChange}>
            <option selected>Product Category</option>
            {
              categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.title}
                </option>
              ))

              }
          </select>
          <div className="mb-3">
            <label htmlFor="productImage" className="form-label">Choose Image</label>
            <input
              type="file"
              className="form-control"
              id="productImage"
              onChange={handleFileChange}
              accept="image/*"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Upload</button>
        </form>
      </div>
    </>
  );
}

export default Products;
