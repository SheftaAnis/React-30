import React from 'react'
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import Home from './forrouter/Home'
import Contact from './forrouter/Contact'
import About from './forrouter/About'
function Nine() {
  return (
    <BrowserRouter>
    <nav>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/Contact'>Contact</Link>
            </li>
            <li>
               <Link to='/About'>About</Link>
            </li>
        </ul>
    </nav>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/About' element={<About/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Nine
