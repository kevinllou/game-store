import { Navigate, Outlet } from 'react-router-dom';
import { IAuth } from '../interfaces/IAuth';

interface ProtectedRouteProps {
    auth: IAuth | null | undefined;
    redirectPath: string;
}
export default function ProtectedRoute({ auth, redirectPath }: ProtectedRouteProps) {
	if (!auth?.isAuthenticated) {
		return <Navigate to={redirectPath} replace />;
	}
	return (
		<Outlet />
	);
}
