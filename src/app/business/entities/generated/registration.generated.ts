import { BaseEntity } from "../../../core/entities/base-entity";


export class Registration extends BaseEntity
{
    email?: string;
	password?: string;

    constructor(
    {
        email,
		password
    }:{
        email?: string;
		password?: string;     
    } = {}
    ) {
        super('Registration'); 

        this.email = email;
		this.password = password;
    }

}

