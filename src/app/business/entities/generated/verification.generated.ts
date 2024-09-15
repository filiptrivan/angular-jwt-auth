import { BaseEntity } from "../../../core/entities/base-entity";


export class Verification extends BaseEntity
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
        super('Verification'); 

        this.email = email;
		this.password = password;
    }

}

