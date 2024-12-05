import React,{useState} from 'react'
import { Modal, ModalBody, ModalHeader, Row, Col } from "reactstrap";
import { TagsInput } from "react-tag-input-component";
function ModalForm({title,heading,buttonText,index}) {
    // State to Toggle Modal
    const [openModal, setOpenModal] = useState(false);
// State to handleForm in the Modal
const [selected, setSelected] = useState([]);
const data=JSON.parse(localStorage.getItem("websites"))
const result=data[index];
console.log(result.weburl);
    const [editformData,seteditFormData]=useState({
        editweburl:result.weburl,
        edituseremail:[],
        editwebhealth:result.webhealth,
        editwebresponse:result.webresponse,
        editwebtime:result.webtime,
        editwebtemplate:""
})
editformData.useremail=selected;

      
      // Destructure all form variables from the state
      const {editweburl,editwebresponse,editwebtime}=editformData;

      // Regular Expression For validation of a Web Url
const testedWeb=/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(editweburl);
// Regular Expression for validation of a email
const emailRegex = new RegExp(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/);
const emailResult=emailRegex.test(selected)
      
      // Handle The values that are entered in the state
  const onChange=(e)=>{
    seteditFormData((prevstate)=>({
      ...prevstate,
      [e.target.name]:e.target.value,
    }),
     
    )
        }
       
        // Handle the submit function when the button is clicked
const handleSubmit=(e)=>{
    e.preventDefault();
    const websites=JSON.parse(localStorage.getItem("websites"))
    websites.push(editformData)
   
        localStorage.setItem("websites",JSON.stringify(websites));
        
          seteditFormData({ 
            // Reset form data to empty values
            editweburl:"",
            edituseremail:[],
            editwebhealth:"",
            editwebresponse:"",
            editwebtime:"",
            editwebtemplate:""
          });
          setOpenModal(!openModal)
          window.location.reload();
    
 
   
    }

  return (
    <>
    <button
        type="button"
        className="btn btn-primary"
        onClick={() =>setOpenModal(true)}
      >
        {title}
      </button>
    <Modal
    size="lg"
    isOpen={openModal}
    toggle={() => setOpenModal(!openModal)}
  >
    <ModalHeader toggle={() => setOpenModal(!openModal)}>
     {heading}
    </ModalHeader>
    <ModalBody>
      <Row>
        <Col lg={12}>
          <form onSubmit={handleSubmit}>
  
            <label htmlFor="editweburl" className="form-label">Website URL with HTTP and HTTPS</label>
            <input type="text" name="editweburl" value={editweburl} placeholder="Please Enter Web Url" onChange={onChange} className="form-control" required/>
            {testedWeb ? (
        <span style={{ color: 'green' }}>Valid URL</span>
      ) : (
        <span style={{ color: 'red' }}>Invalid URL</span>
      )}<br/>
       
            <label htmlFor="weburl" className="form-label">Add user Emails</label>

      <TagsInput
        value={selected}
        onChange={setSelected}
        type="email"
        name="fruits"
        placeHolder="Add User Emails"
      />
      <em>press enter or comma to add new tag</em><br/>
      {emailResult ? (
        <span style={{ color: 'green' }}>Valid Email</span>
      ) : (
        <span style={{ color: 'red' }}>Invalid EMAIL</span>
      )}<br/>
            <label htmlFor="webhealth" className='form-label'>Website Health</label>
            <select className='form-control' name="webhealth" onChange={onChange} required>
                <option defaultValue="Choose an option">Choose An Option</option>
                <option value="Good" >Good</option>
                <option value="Average">Average</option>
                <option value="Bad">Bad</option>

            </select>
            <label htmlFor="webresponse" className="form-label">After how many bad responses you want to be notified?</label>
            <input type="number" name="webresponse" value={editwebresponse} placeholder="Please Enter Responses Limit" onChange={onChange} className="form-control" min={1} required/>
            <label htmlFor="webtime" className="form-label">Time Interval to check the web(In minutes)</label>
            <input type="number" name="webtime" value={editwebtime} placeholder="Please Enter Web Url" onChange={onChange} className="form-control" max={60} min={1} required/>
            <label htmlFor="webtemplate" className="form-label">Please Choose an Email Template</label>
            <select className='form-control' name="webtemplate" onChange={onChange} required>
                <option defaultValue="Choose an option">Choose A Template</option>
                <option value="Template-1" >Template-1</option>
                <option value="Template-2">Template-2</option>
                <option value="Template-3">Template-3</option>

            </select>

            <button className="btn btn-primary mt-3">
              {buttonText}
            </button>
           
          </form>
        </Col>
      </Row>
    </ModalBody>
  </Modal>
  </>
  )
}

export default ModalForm