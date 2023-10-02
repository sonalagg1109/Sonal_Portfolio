import React  from 'react';
import './contact.css';

const contact = () => {
    
    
  return (
    <section id="contactPage">
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
            <form className="contactform" >
                <input type="text" className="name" placeholder='Your Name' />
                <input type="email" className="email"placeholder='Your Email'/>
               <textarea className='msg' name='message'rows="5"placeholder='Your Message'></textarea>
               <br/>
                <button type='submit' value='Send' className="submitBtn">Submit</button>
               <div className="links">
                <img src="http://logos-download.com/wp-content/uploads/2016/05/Gmail_logo_icon.png" height="30px"alt="" className='link'/>
                <img src="https://sguru.org/wp-content/uploads/2018/02/linkedin-logo-hd-png-3.png " height="30px" alt="" className='link'/>
                </div>
            </form>

        </div>

    </section>
  );
}

export default contact;
