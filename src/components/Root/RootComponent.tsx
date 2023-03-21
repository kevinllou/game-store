import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { RootProps } from '../../interfaces/IRootProps';


export default function RootComponent({ userInformation, logout }: RootProps) {
	return (
		<div className='App'>
			<Navbar userInformation={userInformation} logout={logout}/>
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
