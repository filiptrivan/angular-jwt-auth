import { BaseEntity } from "../../../core/entities/base-entity";


export class VerificationT extends BaseEntity
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
        super('VerificationT'); 

        this.email = email;
		this.password = password;
    }

}

