import React from 'react';
import './Contact.css';
import Form from 'react-bootstrap/Form';

const Contact = () => {
  return (
    <div className='contact'>
      <img
        src="https://daraz.com/wp-content/uploads/2021/12/Daraz-Team-Member-768x512.jpg"
        alt="Contact"
      />
      {
        <Form className='input'>
          <Form.Group className="mb-4" controlId="formName">
            <Form.Control type="text" placeholder="Your Name*" />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formEmail">
            <Form.Control type="email" placeholder="Email*" required />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formPhone">
            <Form.Control type="tel" placeholder="Phone" />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formMessage">
            <Form.Control as="textarea" rows={3} placeholder="Message" />
          </Form.Group>
          <p style={{ fontSize: '15px' }}>
            By clicking the Submit button you agree to our
            <span style={{ color: 'orange' }}>
              <s> Privacy Policy </s>
            </span>
          </p>
          <button className="button">
            Submit
          </button>
        </Form>
      }

    </div>
  );
}

export default Contact;
