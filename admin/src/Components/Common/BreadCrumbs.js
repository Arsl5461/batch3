import React from 'react'
import { Link } from 'react-router-dom'
function BreadCrumbs({title,heading}) {
  return (
    <div className="pagetitle">
        <h1>{heading}</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/Navadmin/">Home</Link>
            </li>
            <li className="breadcrumb-item active">{title}</li>
          </ol>
        </nav>
      </div>
  )
}

export default BreadCrumbs