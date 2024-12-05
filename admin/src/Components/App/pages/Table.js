import React from 'react'
import ModalForm from './Modal';
import EditModal from "./EditModal"
function Table({currentPosts}) {
  const data = JSON.parse(localStorage.getItem("websites"));

    // This function is to delete the item from the table
    const handleDelete=(index)=>{
        data.splice(index, 1);
        console.log(data);
        localStorage.setItem("websites",JSON.stringify(data))
        window.location.reload();
    
    }

  return (
    <table className="table">
    <thead>
      <tr>
        <th>Website URL</th>
        <th>Users Email</th>
        <th>Web Health</th>
        <th>Response Time</th>
        <th>Time Interval</th>
        <th>Web Template</th>
        <th>Delete</th>
        {/* <th>Update</th> */}
      </tr>
    </thead>
    <tbody>
      {data
        ? currentPosts.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item?.weburl}</td>
               <td >{item?.useremail.map((value,index)=>{
                return(
                  <p key={index}>
                    {value}
                  </p>
                )
               })}</td>
                <td>{item?.webhealth}</td>
                <td>{item?.webresponse}</td>
                <td>{item?.webtime}</td>
                <td>{item?.webtemplate}</td>
                <td><button onClick={()=>handleDelete(index)} className="btn btn-primary">Delete</button></td>
                <td><EditModal title="Edit" heading="Edit Website Record" buttonText="Edit Website" index={index}/></td>
              </tr>
            );
          })
        : "THERE IS NO DATA"}
    </tbody>
  </table>
  )
}

export default Table