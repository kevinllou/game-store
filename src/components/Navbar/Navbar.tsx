import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IUsers } from '../../interfaces/IUsers';
import './Navbar.scss';

interface NavProps {
	userInformation: IUsers[] | null | undefined;
	logout: () => void;
}

export default function Navbar({ userInformation, logout }: NavProps): JSX.Element {
	const [isOpen, setIsOpen] = useState(false);
	const [showIconUser, setShowIconUser] = useState(false);
	const toggleMenu = () => setIsOpen(!isOpen);
	const toggleIconUser = () => setShowIconUser(!showIconUser);

	return (
		<header className='header'>
			<div className="header__logo">
				<a href="/"><i className="fa-solid fa-gamepad"> E-GAMES</i></a>
			</div>
			<div className={isOpen ? 'header__menuNavigation--responsive' : 'header__menuNavigation'}>
				<div className="header__form">
					<form>
						<input type="search" placeholder='Type...' />
						<button type="submit"><i className="fa-solid fa-magnifying-glass" /></button>
					</form>
				</div>
				<nav className="header__primaryNavigation">
					<ul>
						<li><NavLink to='/' className={({ isActive }) =>
							isActive ? 'header--active' : ''
						}>Home</NavLink></li>
						<li><NavLink to='/games' className={({ isActive }) =>
							isActive ? 'header--active' : ''
						}>Games</NavLink></li>
						{
							userInformation && <li className="header__dropdown">
								<i className="fa-solid fa-user" style={{ color: 'white' }} onClick={toggleIconUser} ></i>
								<ul className="header__dropdownMenu" style={showIconUser ? { display: 'flex' } : { display: 'none' }}>
									<li>{userInformation[0].name}</li>
									<li><button className='header__logout' onClick={logout}>Logout</button></li>
								</ul>
							</li>
						}
					</ul>
				</nav>
			</div>
			<div className="header__menuIcon" onClick={toggleMenu}>
				{!isOpen ? <i className="fa-solid fa-bars" /> : <i className="fa-solid fa-xmark"></i>}
			</div>
		</header>
	);
}

