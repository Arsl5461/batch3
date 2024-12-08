import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../assets/img/logo.png";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [emailVerified, setEmailVerified] = useState(false);
  const [userVerified, setUserVerified] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    let url;

    try {
      if (userVerified) {
        // Update Password
        url = "http://localhost:8082/api/user/update-password";
        const response = await axios.post(url, { email: userEmail, password });
        if (response.data.success) {
          toast.success("Password updated successfully!");
          navigate("/"); // Redirect to login after successful password update
        } else {
          toast.error("Failed to update password.");
        }
      } else if (emailVerified) {
        // Verify OTP
        url = "http://localhost:8082/api/user/verify";
        const response = await axios.post(url, { email: userEmail, otp });
        if (response.data.success) {
          toast.success(response.data.message);
          setUserVerified(true);
        } else {
          toast.error("Invalid OTP. Please try again.");
        }
      } else {
        // Send OTP
        url = "http://localhost:8082/api/user/otp";
        const response = await axios.post(url, { email: userEmail });
        if (response.data.success) {
          toast.success(response.data.message);
          setEmailVerified(true);
        } else {
          toast.error("Failed to send OTP. Please try again.");
        }
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <main>
        <div className="container">
          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                  <div className="d-flex justify-content-center py-4">
                    <a href="index.html" className="logo d-flex align-items-center w-auto">
                      <img src={Logo} alt="" />
                      <span className="d-none d-lg-block">NiceAdmin</span>
                    </a>
                  </div>

                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="pt-4 pb-2">
                        <h5 className="card-title text-center pb-0 fs-4">Forgot Password</h5>
                        <p className="text-center small">Please enter your email to get an OTP</p>
                      </div>

                      <form className="row g-3 needs-validation" onSubmit={onSubmit} noValidate>
                        <div className="col-12">
                          <label htmlFor="yourUsername" className="form-label">Email</label>
                          <div className="input-group has-validation">
                            <input
                              type="email"
                              name="email"
                              className="form-control"
                              id="yourUsername"
                              value={userEmail}
                              onChange={(e) => setUserEmail(e.target.value)}
                              required
                            />
                            <div className="invalid-feedback">Please enter your email.</div>
                          </div>
                        </div>

                        {emailVerified && (
                          <div className="col-12">
                            <label htmlFor="otpInput" className="form-label">OTP</label>
                            <div className="input-group has-validation">
                              <input
                                type="text"
                                name="otp"
                                className="form-control"
                                id="otpInput"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                required
                              />
                              <div className="invalid-feedback">Please enter the OTP.</div>
                            </div>
                          </div>
                        )}

                        {userVerified && (
                          <div className="col-12">
                            <label htmlFor="passwordInput" className="form-label">New Password</label>
                            <div className="input-group has-validation">
                              <input
                                type="password"
                                name="password"
                                className="form-control"
                                id="passwordInput"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                              />
                              <div className="invalid-feedback">Please enter a new password.</div>
                            </div>
                          </div>
                        )}

                        <button className="btn btn-primary">
                          {userVerified ? "Update Password" : emailVerified ? "Verify OTP" : "Send OTP"}
                        </button>

                        <div className="col-12">
                          <p className="small mb-0">
                            <Link to="/">Login to your account</Link>
                          </p>
                        </div>
                      </form>

                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Link to="/" className="back-to-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </Link>
    </>
  );
}

export default Login;
