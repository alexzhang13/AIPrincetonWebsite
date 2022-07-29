import React, {useState} from 'react'
import { RiMenu3Line, RiCloseLine } from  'react-icons/ri';
import logo from '../../assets/logo.svg'

import './navbar.css'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <><div className='site__navbar'>
      <div className='site__navbar-links'>
        <div className='site__navbar-links_logo'>
         <p className=""> AI@PRINCETON </p>
        </div>
        <div className='site__navbar-links_container'>
          <p><a href="#home"> Home </a></p>
          <p><a href="#about"> About </a></p>
          <p><a href="#blog"> Blog </a></p>
          <p><a href="#resources"> Resources </a></p>
        </div>
      </div>
    </div><div className='site__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="site__navbar-menu_container scale-up-center">
            <div className="site__navbar-menu_container-links">
              <p><a href="#home"> Home </a></p>
              <p><a href="#about"> About </a></p>
              <p><a href="#blog"> Blog </a></p>
              <p><a href="#resources"> Resources </a></p>
            </div>
          </div>
        )}
      </div></>
  );
}

export default Navbar