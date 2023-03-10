import React from 'react'
import "./Registration.css"
import { Link } from 'react-router-dom';
const Registration = () => {
  return (
    <form >
  <div class="parent_container">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <hr/>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" required/>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/>
    <hr/>

    <p>By creating an account you agree to our <Link to="/terms">Terms & Privacy</Link>.</p>
    <button type="submit"  class="registerbtn"><Link style={{"color":"white"}} to="/">Register</Link></button>
  </div>

  <div class="container signin">
    <p>Already have an account? <Link to="/login">Sign in</Link>.</p>
  </div>
</form>
  )
}

export default Registration
