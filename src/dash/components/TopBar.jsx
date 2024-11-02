import React from 'react'
import { Link } from 'react-router-dom'

export default function TopBar() {
  return (
    <>
    <section className="topbarsection">
        <div className="companytittle">
          <Link to={"/"} className='Link'><h2>Dash</h2></Link>            
        </div>
        <div className="searchbar">
            <input type="text" placeholder='Search' />
        </div>
        <div className="userAuth">
            Login / Signup
        </div>
    </section>
    </>
  )
}
