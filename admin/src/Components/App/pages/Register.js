import React from 'react'
import {Link,useNavigate} from "react-router-dom"
import Logo from "../../../assets/img/logo.png"
import { useFormik } from 'formik'
import { basicSchema } from '../../../schemas'

function Register() {
  



  const navigate=useNavigate();
  const onSubmit=async (values,actions)=>{
    if(values.name && values.email && values.password && values.address && values.company && values.city && values.country){

    
    localStorage.setItem("name",JSON.stringify(values.name));
    localStorage.setItem("email",JSON.stringify(values.email));
    localStorage.setItem("password",JSON.stringify(values.password));
    localStorage.setItem("address",JSON.stringify(values.address));
    localStorage.setItem("company",JSON.stringify(values.company));
    localStorage.setItem("city",JSON.stringify(values.city));
    localStorage.setItem("country",JSON.stringify(values.country));
    localStorage.setItem("token",JSON.stringify("arslanakmal1234"))
    console.log(values);
    console.log(actions);
    
    await new Promise((resolve)=>setTimeout(resolve,1000));
    actions.resetForm();
    navigate("/")
    }
    
  }


  const {values,handleChange,handleBlur,handleSubmit,errors,touched}=useFormik({
initialValues:{
  name:"",
  email:"",
  password:"",
  address:"",
  company:"",
  city:"",
  country:"",

},
validationSchema:basicSchema,
onSubmit,
  })
  const getBase64=(file)=>{
    return new Promise((resolve,reject)=>{
      const reader=new FileReader();
      reader.onload=()=>resolve(reader.result);
      reader.onabort=(error)=>reject(error);
      reader.readAsDataURL(file)
    })
    }
    const handleImg=(e)=>{
      const file=e.target.files[0];
      getBase64(file).then(base64=>{
localStorage["img"]=base64;
console.debug("File Store",base64)

      })
    }


 
 
  return (
    <>
    <main>
    <div class="container">

      <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

              <div class="d-flex justify-content-center py-4">
                <a href="index.html" class="logo d-flex align-items-center w-auto">
                  <img src={Logo} alt=""/>
                  <span class="d-none d-lg-block">NiceAdmin</span>
                </a>
              </div>
                  <div class="card">
            <div class="card-body">
              <h5 class="card-title">Register Form</h5>

              {/* <!-- Register Form --> */}
              <form class="row g-3" onSubmit={handleSubmit}>
                <div class="col-md-12">
                  <label for="inputName5" class="form-label">Your Name</label>
                  <input type="text" class="form-control" name="name" id="inputName5" value={values.name} onChange={handleChange} required/>
                </div>
                <div class="col-md-12">
                  <label for="inputEmail5" class="form-label">Email</label>
                  <input type="email"  id="inputEmail5" name="email" className={errors.email && touched.email ? "input-error form-control":"form-control"} value={values.email} onChange={handleChange} onBlur={handleBlur} required/>
                  {errors.email && touched.email && <p className='error'>{errors.email}</p>}
                </div>
                <div class="col-md-12">
                  <label for="inputPassword5" class="form-label">Password</label>
                  <input type="password" className={errors.password && touched.password ? "input-error form-control":"form-control"} id="inputPassword5" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} required/>
                  {errors.password && touched.password && <p className='error text-sm'>{errors.password}</p>}

                </div>
                <div class="col-12">
                  <label for="inputAddress5" class="form-label">Address</label>
                  <input type="text" className={errors.address && touched.address ? "input-error form-control":"form-control"} id="inputAddres5s" name="address" value={values.address} onChange={handleChange} onBlur={handleBlur} required />
                  {errors.address && touched.address && <p className='error text-sm'>{errors.address}</p>}
               
                </div>

                <div class="col-12">
                  <label for="inputAddress2" class="form-label">Company</label>
                  <input type="text" class="form-control" id="inputAddress2" name="company" value={values.company} onChange={handleChange} onBlur={handleBlur} required />
                </div>
                <div class="col-md-6">
                  <label for="inputCity" class="form-label">City</label>
                  <input type="text" class="form-control" id="inputCity" name="city" value={values.city} onChange={handleChange} onBlur={handleBlur} required/>
                </div>
                <div class="col-md-6">
                  <label for="inputState" class="form-label">Country</label>
                  <input type="text" class="form-control" id="inputCountry" name="country" value={values.country} onChange={handleChange} required />
                  
                </div>
                <div class="col-md-6">
                  <label for="inputState" class="form-label">Profile Image</label>
                  <input type="file" class="form-control" id="inputCountry" name="file"  onChange={handleImg} required />
                  
                </div>
              
               
                <div class="text-center">
                  <button type="submit" class="btn btn-primary" onClick={onSubmit}>Submit</button>
                 
                </div>
                <div class="col-12">
                      <p class="small mb-0">Already Have an account <Link to="/">Log in</Link></p>
                    </div>
              </form>
              {/* <!-- End Register Form --> */}


                 </div>
              </div>


            </div>
          </div>
        </div>

      </section>

    </div>
  </main>

  <Link to="/" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></Link>

    </>
  )
}

export default Register