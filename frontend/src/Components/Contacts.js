import React from 'react';
import './Contacts.css';

const Contacts = () => {
  return (
    <div className='contact-container'>
      <div className='contact-item'>
        <i className="fas fa-phone" style={{ color: 'white' }}></i>
        <a className='link' href="tel:+947750264"> +94 773 750 264 </a>
      </div>

      <div className='contact-item'>
        <i className="fab fa-whatsapp" style={{ color: 'white' }}></i>
        <a className='link' href="https://wa.me/+94777550264"> +94 777 550 264 </a>
      </div>

      <div className='contact-item'>
        <i className="fas fa-envelope" style={{ color: 'white' }}></i>
        <a className='link' href="mailto:lakshanpd.cse21@gmail.com"> lakshanpd.cse21@gmail.com </a>
      </div>

      <div className='contact-item'>
        <i className="fab fa-facebook" style={{ color: 'white' }}></i>
        <a className='link' href="https://www.facebook.com/example"> pallwala resort </a>
      </div>
    </div>
  );
}

export default Contacts;


