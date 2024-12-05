import React from 'react'
import {Link} from "react-router-dom"
import Error from "../../../assets/img/not-found.svg"
function Error404() {
  return (
    <>
    <main>
    <div className="container">

      <section className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
        <h1>404</h1>
        <h2>The page you are looking for doesn't exist.</h2>
        <Link className="btn" to="/">Back to home</Link>
        <img src={Error} class="img-fluid py-5" alt="Page Not Found"/>
        <div class="credits">
         
          Designed by <Link to="https://bootstrapmade.com/">BootstrapMade</Link>
        </div>
      </section>

    </div>
  </main>

  <Link to="/" className="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></Link>
  </>
  )
}

export default Error404