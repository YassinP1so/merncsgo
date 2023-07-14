import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  
  return (
    
    <div className="row contactus ">
        <div className="col-md-6 ">
        <img
            src="https://www.csgowallpapers.com/assets/images/original/csgowallpaper_429079263383_1686326233_673967132980.jpg"
            alt="contactus"
            style={{ width: "990px" , marginTop : "30px" , borderRadius : "50px" , height : "100%" , marginLeft : "20px"}}
        />
        </div>
        <div className="col-md-4" style={{marginTop : "50px"}}>
        <h1 className="title" >CONTACT US</h1>
        <p className="paragraph-contact text-justify mt-3 " >
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <p className=" emalio mt-3">
        <img src='/icons/email.png' alt='' style={{width : "15px"}}/> :  yassin156niu@gmail.com 
        </p>
        <p className="numiro mt-3">
        <img src='/icons/phone.png' alt='' style={{width : "15px"}}/> : 25595945 
        </p>
        <p className='mapo mt-3'>
        <img src='/icons/map.png' alt='' style={{width : "15px" , }}/> : Bardo Rue De Montevideo 
        </p>
        
        <div className='the-contact'>
        <input type='text' placeholder='Enter Your Name' className="Contact-Name"/>
        <br/>
        <input type='text' placeholder='Enter Your Email' className='Contact-Email'/>
        <textarea placeholder='Message' className='textarea'/>
        </div>
        </div>
      </div>
    
  );
}

export default ContactUs;
