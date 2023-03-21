import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedRouteProps {
    auth: object | null;
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
