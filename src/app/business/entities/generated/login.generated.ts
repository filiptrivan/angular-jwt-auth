import { BaseEntity } from "../../../core/entities/base-entity";


export class Login extends BaseEntity
{
    email?: string;
	password?: string;
	browserId?: string;

    constructor(
    {
        email,
		password,
		browserId
    }:{
        email?: string;
		password?: string;
		browserId?: string;     
    } = {}
    ) {
        super('Login'); 

        this.email = email;
		this.password = password;
		this.browserId = browserId;
    }

}

