import React from 'react'
import { navLinks } from '../constants/index'

const Navbar = () => {
  return (
   <header>
    <nav>
        <img src='/public/logo.svg 'alt='apple logo'/>
        <ul>
            {navLinks.map(({label}) =>(
                <li key={label}>
                    <a href='label'>{label}</a>
                </li>
            )
            )}
        </ul>
        <div className='flex-center gap-3'>
            <button>
                <img src='/public/search.svg'/>
            </button>
            <button>
                <img src='/public/cart.svg'/> 
            </button>
        </div>
    </nav>
   </header>
  )
}

export default Navbar