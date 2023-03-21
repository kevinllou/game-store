import { Navigate, Outlet } from 'react-router-dom';
import { IAuth } from '../interfaces/IAuth';

interface ProtectedRouteProps {
    auth: IAuth | null | undefined;
    redirectPath: string;
}
export default function ProtectedRoute({ auth, redirectPath }: ProtectedRouteProps) {
	if (!auth) {
		return <Navigate to={redirectPath} />;
	}
	return (
		<Outlet />
	);
}
