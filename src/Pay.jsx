import React from 'react'

const Pay = () => {
  return (
    <>
          <h1>Login</h1>
          
          <div>
              <label htmlFor="">userName:</label>
              <input type="email" placeholder='Enter Email ID or Mobile Number *' />
              <label htmlFor="">Password:</label>
              <input type="password" placeholder='Enter password' />
              <p>Don't have an account ? <a href="">SignUp</a></p>
              <button>Login</button>
          </div>
    </>
  )
}

export default Pay
