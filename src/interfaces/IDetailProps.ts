import { IUsers } from './IUsers';

export interface IDetailProps {
	userInformation?: IUsers[] | null | undefined;
	isAuthenticated?: boolean;
	logout?: () => void;
}