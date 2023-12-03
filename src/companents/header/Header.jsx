import React, {useState} from 'react'
import './header.css';

// import Icons
import { IoMenu, IoClose } from "react-icons/io5";

function Header() {
    const[active, setActive]= useState('navbar')
    const showNav = ()=>{
        setActive('navbar activeNavbar')
    }
    const removeNav = ()=>{
        setActive('navbar')
    }




  return (
    <div className='header flex'>
        <div className='container flex'>

            <div className='logoDiv'>
                <div className='logo'>FOOD.</div>
            </div>

            <div className={active}>
                <div className='close' onClick={removeNav}>
                    <IoClose className="icon"/>
                </div>
                <ul className='links flex'>
                    <li className='link'>
                        <a href='#home'>Home</a>
                    </li>

                    <li className='link'>
                        <a href='#menu'>Menu</a>
                    </li>

                    <li className='link'>
                        <a href='#aboutUs'>About Us</a>
                    </li>

                    <li className='link'>
                        <a href='#footer'>Contact</a>
                    </li>
                </ul>

            </div>

            <div  className='open' onClick={showNav}>
                <IoMenu className="icon"/>
            </div>
        </div>
    </div>
  );
}

export default Header;
