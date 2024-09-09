import { BaseEntity } from "../../../core/entities/base-entity";


export class Registration extends BaseEntity
{
    email?: string;
	password?: string;
	passwordConfirmation?: string;

    constructor(
    {
        email,
		password,
		passwordConfirmation
    }:{
        email?: string;
		password?: string;
		passwordConfirmation?: string;     
    } = {}
    ) {
        super('Registration'); 

        this.email = email;
		this.password = password;
		this.passwordConfirmation = passwordConfirmation;
    }

}

