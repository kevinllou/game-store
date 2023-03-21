import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { IUsers } from '../../interfaces/IUsers';
interface RootProps {
	userInformation?: IUsers[] | null | undefined;
	isAuthenticated?: boolean;
	logout: () => void;
}

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
