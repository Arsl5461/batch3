import React from 'react'
import {Link} from "react-router-dom"
function Pagination({paginate,sitesPerpage}) {

     
const data=JSON.parse(localStorage.getItem("websites"))
  const pageNumbers=[];
  for(let i=1; i<=Math.ceil(data.length/sitesPerpage);i++){
    pageNumbers.push(i);
  }
  return (
   <nav>
  <ul className="pagination d-flex justify-content-center align-items-center">
{pageNumbers.map((number)=>{
  return(
  <li key={number} className="page-item">
    <Link onClick={()=>paginate(number)} className="page-link">
      {number}
    </Link>
  </li>
  )
})}
  </ul>
</nav> 
  )
}

export default Pagination