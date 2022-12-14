import React from 'react'

function Navbar() {
  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <a className="btn btn-ghost normal-case text-xl">Propertys</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal p-0">
        <li><a className="btn btn-active btn-primary text-white">Rent</a></li>
        <li><a>Buy</a></li>
        <li><a>Sell</a></li>
        <li tabIndex={0}>
          <a>
            Manage Property
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
          </a>
          <ul className="p-2 bg-base-100">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li tabIndex={0}>
          <a>
            Resources
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
          </a>
          <ul className="p-2 bg-base-100">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div className="navbar-end">
        <button className="btn btn-outline btn-primary mr-4">Login</button>
      <button className="btn btn-primary">Signup</button>
    </div>
  </div>
  )
}

export default Navbar