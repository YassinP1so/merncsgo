import React from 'react'
import './Error.css'
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <div >
        <div className='error-page'>
          <div className='content'>
            <h1 data-text="404 not found!">404 not found!</h1>
            <h4 data-text="Opps ! Page not found" style={{fontSize : "32px"}}>Opps ! Page not found</h4>
            <p style={{color : "white" , fontSize : "19px"}}>Sorry , the page you're looking for doesn't exist . If you think something is broken, report a probleme.</p>
            <div className='btns'>
            <Link to="/" className="a"> Return Home </Link>
            <Link to="/" className="a"> Report Probleme</Link>
            </div>
          </div>
        </div>
  </div>
  )
}

export default Error
