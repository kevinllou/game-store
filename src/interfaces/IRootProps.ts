import { IUsers } from './IUsers';

export interface RootProps {
	userInformation?: IUsers[] | null | undefined;
	isAuthenticated?: boolean;
	logout: () => void;
}