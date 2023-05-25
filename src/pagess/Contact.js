import React, { useState } from 'react';
import Nav from '../komponents/Nav';

function ContactForm() {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const formData = {
      name: contactName,
      email: contactEmail,
      message: contactMessage
    };

 
    localStorage.setItem('contactFormData', JSON.stringify(formData));

    
    setContactName('');
    setContactEmail('');
    setContactMessage('');
  };

  return (<>
    <Nav/>
    <div className="container">
      <h1 className="my-4 text-center">Contact Us</h1>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" value={contactName} onChange={(e) => setContactName(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="5" value={contactMessage} onChange={(e) => setContactMessage(e.target.value)} required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary btn-lg">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default ContactForm;
