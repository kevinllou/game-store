import { IUsers } from './IUsers';

export interface IAuth {
    isAuthenticated: boolean;
    userInformation: IUsers[] | null;
}