import React from 'react'
import {Link} from "react-router-dom"
function FilterPage() {
  return (
    <div className="filter">
    <Link className="icon" to="/" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></Link>
    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
      <li className="dropdown-header text-start">
        <h6>Filter</h6>
      </li>

      <li><Link className="dropdown-item" to="/">Today</Link></li>
      <li><Link className="dropdown-item" to="/">This Month</Link></li>
      <li><Link className="dropdown-item" to="/">This Year</Link></li>
    </ul>
  </div>
  )
}

export default FilterPage