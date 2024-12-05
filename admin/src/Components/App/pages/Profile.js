import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import ProfileImg from "../../../assets/img/profile-img.jpg"
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import BreadCrumbs from '../../Common/BreadCrumbs';
function Profile() {
  // Getting All The Items From The LocalStorage
  const name=JSON.parse(localStorage.getItem("name"));
  const email=JSON.parse(localStorage.getItem("email"));
  const password=JSON.parse(localStorage.getItem("password"));
  const address=JSON.parse(localStorage.getItem("address"));
  const company=JSON.parse(localStorage.getItem("company"));
  // const city=JSON.parse(localStorage.getItem("city"));
  const country=JSON.parse(localStorage.getItem("country"));
  const about=JSON.parse(localStorage.getItem("about"));
const job=JSON.parse(localStorage.getItem("job"))
const phone=JSON.parse(localStorage.getItem("phone"));
const img =localStorage.getItem("img")
  // Creating State to Edit The Items coming from localstorage
const [username,setuserName]=useState(name);
const [userEmail,setUserEmail]=useState(email);
const [userAbout,setUserAbout]=useState(about);
const [userCompany,setUserCompany]=useState(company);
const [userPhone,setUserPhone]=useState(phone);
const [userAddress,setUserAddress]=useState(address);
const [userCountry,setUserCountry]=useState(country);
const [oldPassword,setOldPassword]=useState(password);
const [newPassword,setNewPassword]=useState();
const [cNewPassword,setcNewPassword]=useState()
const [userJob,setUserJob]=useState(job);



// Submit The data after editing the profile
const onSubmit=(e)=>{
  e.preventDefault();
  localStorage.setItem("name",JSON.stringify(username))
  localStorage.setItem("email",JSON.stringify(userEmail))
  // localStorage.setItem("password",JSON.stringify(userP))
  localStorage.setItem("address",JSON.stringify(userAddress))
  localStorage.setItem("company",JSON.stringify(userCompany))
  // localStorage.setItem("country",JSON.stringify(userCountry))
  localStorage.setItem("about",JSON.stringify(userAbout))
  localStorage.setItem("job",JSON.stringify(userJob))
  localStorage.setItem("phone",JSON.stringify(userPhone))
  window.location.reload();
}
const removeImage=()=>{
  localStorage.removeItem("img")
}
// Update Password Code 
const updatePassword=()=>{
  if(oldPassword===password && newPassword===cNewPassword){
    localStorage.setItem("password",JSON.stringify(newPassword))
  }
  else{
    toast.error("Old Password and New Password Does Not Match")
  }
}



  return (
    <main id="main" className="main">
<BreadCrumbs title="Profile" heading="Profile"/>
   

    <section className="section profile">
      <div className="row">
        <div className="col-xl-4">

          <div className="card">
            <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">

              <img src={img} alt="Profile" className="rounded-circle"/>
              <h2>{name}</h2>
              <h3>{job}</h3>
              <div className="social-links mt-2">
                <Link to="/" className="twitter"><i className="bi bi-twitter"></i></Link>
                <Link to="/" className="facebook"><i className="bi bi-facebook"></i></Link>
                <Link to="/" className="instagram"><i className="bi bi-instagram"></i></Link>
                <Link to="/" className="linkedin"><i className="bi bi-linkedin"></i></Link>
              </div>
            </div>
          </div>

        </div>

        <div className="col-xl-8">

          <div className="card">
            <div className="card-body pt-3">
             
              <ul className="nav nav-tabs nav-tabs-bordered">

                <li className="nav-item">
                  <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Overview</button>
                </li>

                <li className="nav-item">
                  <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Edit Profile</button>
                </li>

                <li className="nav-item">
                  <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-settings">Settings</button>
                </li>

                <li className="nav-item">
                  <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password">Change Password</button>
                </li>

              </ul>
              <div className="tab-content pt-2">

                <div className="tab-pane fade show active profile-overview" id="profile-overview">
                  <h5 className="card-title">About</h5>
                  <p className="small fst-italic">{about}</p>

                  <h5 className="card-title">Profile Details</h5>

                  <div className="row">
                    <div className="col-lg-3 col-md-4 label ">Full Name</div>
                    <div className="col-lg-9 col-md-8">{name}</div>
                  </div>

                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">Company</div>
                    <div className="col-lg-9 col-md-8">{company}</div>
                  </div>

                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">Job</div>
                    <div className="col-lg-9 col-md-8">{job}</div>
                  </div>

                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">Country</div>
                    <div className="col-lg-9 col-md-8">{country}</div>
                  </div>

                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">Address</div>
                    <div className="col-lg-9 col-md-8">{address}</div>
                  </div>

                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">Phone</div>
                    <div className="col-lg-9 col-md-8">{phone}</div>
                  </div>

                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">Email</div>
                    <div className="col-lg-9 col-md-8">{email}</div>
                  </div>

                </div>

                <div className="tab-pane fade profile-edit pt-3" id="profile-edit">

                  
                  <form>
                    <div className="row mb-3">
                      <label for="profileImage" className="col-md-4 col-lg-3 col-form-label">Profile Image</label>
                      <div className="col-md-8 col-lg-9">
                        <img src={img} alt="Pro"/>
                        <div className="pt-2">
                          <Link to="/admin/profile" className="btn btn-primary btn-sm" title="Upload new profile image"><i className="bi bi-upload"></i></Link>
                          <Link to="/admin/profile" onClick={removeImage} className="btn btn-danger btn-sm" title="Remove my profile image"><i className="bi bi-trash"></i></Link>
                        </div>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label for="fullName" className="col-md-4 col-lg-3 col-form-label">Full Name</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="fullName" type="text" className="form-control" id="fullName" value={username} onChange={(e)=>setuserName(e.target.value)}/>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label for="about" className="col-md-4 col-lg-3 col-form-label">About</label>
                      <div className="col-md-8 col-lg-9">
                        <textarea name="about" className="form-control" id="about" style={{"height": "100px"}} value={userAbout} onChange={(e)=>setUserAbout(e.target.value)}></textarea>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label for="company" className="col-md-4 col-lg-3 col-form-label">Company</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="company" type="text" className="form-control" id="company"  value={company} onChange={(e)=>setUserCompany(e.target.value)}/>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label for="Job" className="col-md-4 col-lg-3 col-form-label">Job</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="job" type="text" className="form-control" id="Job"  value={userJob} onChange={(e)=>setUserJob(e.target.value)}/>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label for="Country" className="col-md-4 col-lg-3 col-form-label">Country</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="country" type="text" className="form-control" id="Country"  value={userCountry} onChange={(e)=>setUserCountry(e.target.value)}/>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label for="Address" className="col-md-4 col-lg-3 col-form-label">Address</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="address" type="text" className="form-control" id="Address" value={userAddress} onChange={(e)=>setUserAddress(e.target.value)}/>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label for="Phone" className="col-md-4 col-lg-3 col-form-label">Phone</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="phone" type="text" className="form-control" id="Phone" value={userPhone} onChange={(e)=>setUserPhone(e.target.value)}/>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label for="Email" className="col-md-4 col-lg-3 col-form-label">Email</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="email" type="email" className="form-control" id="Email" value={userEmail} onChange={(e)=>setUserEmail(e.target.value)}/>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label for="Twitter" className="col-md-4 col-lg-3 col-form-label">Twitter Profile</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="twitter" type="text" className="form-control" id="Twitter" value="https://twitter.com/#"/>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label for="Facebook" className="col-md-4 col-lg-3 col-form-label">Facebook Profile</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="facebook" type="text" className="form-control" id="Facebook" value="https://facebook.com/#"/>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label for="Instagram" className="col-md-4 col-lg-3 col-form-label">Instagram Profile</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="instagram" type="text" className="form-control" id="Instagram" value="https://instagram.com/#"/>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label for="Linkedin" className="col-md-4 col-lg-3 col-form-label">Linkedin Profile</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="linkedin" type="text" className="form-control" id="Linkedin" value="https://linkedin.com/#"/>
                      </div>
                    </div>

                    <div className="text-center">
                      <button type="submit" className="btn btn-primary" onClick={onSubmit}>Save Changes</button>
                    </div>
                  </form>

                </div>

                <div className="tab-pane fade pt-3" id="profile-settings">

                  
                  <form>

                    <div className="row mb-3">
                      <label for="fullName" className="col-md-4 col-lg-3 col-form-label">Email Notifications</label>
                      <div className="col-md-8 col-lg-9">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="changesMade" checked/>
                          <label className="form-check-label" for="changesMade">
                            Changes made to your account
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="newProducts" checked/>
                          <label className="form-check-label" for="newProducts">
                            Information on new products and services
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="proOffers"/>
                          <label className="form-check-label" for="proOffers">
                            Marketing and promo offers
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="securityNotify" checked disabled/>
                          <label className="form-check-label" for="securityNotify">
                            Security alerts
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <button type="submit" className="btn btn-primary">Save Changes</button>
                    </div>
                  </form>

                </div>

                <div className="tab-pane fade pt-3" id="profile-change-password">
                  
                  <form>

                    <div className="row mb-3">
                      <label for="currentPassword" className="col-md-4 col-lg-3 col-form-label">Current Password</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="password" type="password" className="form-control" id="currentPassword" value={oldPassword} onChange={(e)=>setOldPassword(e.target.value)} />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label for="newPassword" className="col-md-4 col-lg-3 col-form-label">New Password</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="newpassword" type="password" className="form-control" id="newPassword" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)}/>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label for="renewPassword" className="col-md-4 col-lg-3 col-form-label">Re-enter New Password</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="renewpassword" type="password" className="form-control" id="renewPassword" value={cNewPassword} onChange={(e)=>setcNewPassword(e.target.value)}/>
                      </div>
                    </div>

                    <div className="text-center">
                      <button type="submit" className="btn btn-primary" onClick={updatePassword}>Change Password</button>
                    </div>
                  </form>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

  </main>

  )
}

export default Profile