import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

export default function RootComponent() {
	return (
		<div className='App'>
			<Navbar />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
