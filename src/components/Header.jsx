import React from 'react'

const Header = () => {
  return (
    <div>
        <ul>
            <li><Link to ={'/home'}><p>Home</p></Link></li>
            <li><Link to ={'/aboutUs'}><p>About us</p></Link></li>
            <li><Link to ={'/login'}><p>Login</p></Link></li>
            <li><Link to ={'/signup'}><p>Sign up</p></Link></li>
        </ul>


    </div>
  )
}

export default Header
