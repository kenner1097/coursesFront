import { ParenEntity } from "./parentEntiy.model";

export class RegisterModel extends ParenEntity {

	public nombre: string;
	public apellidos: string;
	public password: string;
	public role_user: string = "usuario";
	public email: string;
}