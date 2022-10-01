import React from 'react'
import "./Contact.css";
import ContactImage from "../assets/fooda.jpeg"

const Contact = () => {
  return (
    <div className='contact'>
        <div className="leftSide" style={{ backgroundImage: `url(${ContactImage})` }}>
         </div>
        <div className="rightSide">
            <h1>Contact Us</h1>
            <form method='POST' id="contact-form">
                <label htmlFor="name">Full name</label>
                <input type="text"  name="name" id="name"/>
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email"/>
                <label htmlFor="message">Message</label>
                <textarea type="text"  name="message" id="message" rows="7"/>
                <button type='submit'>Send message</button>
            </form>
        </div>

    </div>
  )
}

export default Contact