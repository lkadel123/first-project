import React from 'react'

export default function navigation() {
  return (
    <div>
        <nav>
            <div className=" logo">
                <img src="nike-logo-47A65A59D5-seeklogo.com.png" alt="" className='logo-img'/>
            </div>
            <ul>
                <li><a href="/">Menu</a></li>
                <li><a href="/">Location</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
            <button>Login</button>
        </nav>
    </div>
  )
}
