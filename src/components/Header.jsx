import React from 'react'
import { NavLink } from 'react-router-dom'


function Header() {
  return (
   
    <>
    <nav className='bg-white/30'>
      <ul className='  [&_li>a]:px-5 [&_li>a]:py-1'>
   
        <li>
          <NavLink className={({isActive})=>`${isActive?"bg-black text-amber-100 rounded-2xl  transition-all ease-in-out duration-500":" text-black border-1 rounded-2xl  transition-all ease-in-out duration-500"}`} to='users'>Users</NavLink>
        </li>
        <li>
          <NavLink className={({isActive})=>`${isActive?"bg-black text-amber-100 rounded-2xl py-1 transition-all ease-in-out duration-500":"text-black border-1 rounded-2xl py-1 transition-all ease-in-out duration-500"}`} to='add-user'>Add User</NavLink>
        </li>
       
      </ul>
    </nav>
    </>
  )
}


export default Header