import { BaseEntity } from "../../../core/entities/base-entity";


export class VerificationTo extends BaseEntity
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
        super('VerificationTo'); 

        this.email = email;
		this.password = password;
    }

}

