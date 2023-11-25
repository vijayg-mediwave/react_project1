import React from 'react'

const Nav = () => {
  return (
       <nav>
          <ul>
            <li className='topic'>
              <h2 style={{color:'red'}}>Conten<span style={{color:'blue'}}>Terra</span></h2>
            </li>
          </ul>
          <h1>React Task</h1>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">List</a>
            </li>
            <li>
              <a href="#" role="button">
                Logout
              </a>
            </li>
          </ul>
        </nav>
    )
}

export default Nav
