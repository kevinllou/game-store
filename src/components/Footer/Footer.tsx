import { NavLink } from 'react-router-dom';
import './Footer.scss';

export default function Footer(): JSX.Element {
	return (
		<footer className="footer">
			<div className="footer__socialMedia">
				<li><i className="fa-brands fa-facebook"></i></li>
				<li><i className="fa-brands fa-twitter"></i></li>
				<li><i className="fa-brands fa-linkedin"></i></li>
				<li><i className="fa-brands fa-instagram"></i></li>
			</div>
			<ul className="footer__secondNavigation">
				<li><NavLink to='/' className={({ isActive }) =>
					isActive ? 'footer--active' : ''
				}>Home</NavLink></li>
				<li><NavLink to='/games' className={({ isActive }) =>
					isActive ? 'footer--active' : ''
				}>Games</NavLink></li>
			</ul>
			<div className="footer__copyright">
				<p>©2023 Kevin Grande | All rights Reserved</p>
			</div>
		</footer>

	);
}
