import { BaseEntity } from "../../../core/entities/base-entity";


export class Registration extends BaseEntity
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
        super('Registration'); 

        this.email = email;
		this.password = password;
		this.browserId = browserId;
    }

}

