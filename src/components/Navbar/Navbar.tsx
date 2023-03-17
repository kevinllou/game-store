import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

export default function Navbar(): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className='header'>
            <div className="header__logo">
                <a href="/"><i className="fa-solid fa-gamepad"> E-GAMES</i></a>
            </div>
            <div className={isOpen ? "header__menuNavigation--responsive" : "header__menuNavigation"}>
                <div className="header__form">
                    <form>
                        <input type="search" placeholder='Type...' />
                        <button type="submit"><i className="fa-solid fa-magnifying-glass" /></button>
                    </form>
                </div>
                <nav className="header__primaryNavigation">
                    <ul>
                        <li><NavLink to='/' className={({ isActive }) =>
                            isActive ? "header--active" : ""
                        }>Home</NavLink></li>
                        <li><NavLink to='/games' className={({ isActive }) =>
                            isActive ? "header--active" : ""
                        }>Games</NavLink></li>
                        <li className="header__dropdown">
                            <i className="fa-solid fa-user" style={{ color: "white" }}></i>
                            <ul className="header__dropdownMenu">
                                <li>Kevin Grande</li>
                                <li><button className="header__logout">Logout</button></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="header__menuIcon" onClick={toggleMenu}>
                {!isOpen ? <i className="fa-solid fa-bars" /> : <i className="fa-solid fa-xmark"></i>}
            </div>
        </header>
    )
}

