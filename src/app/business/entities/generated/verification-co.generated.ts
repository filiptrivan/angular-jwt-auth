import { BaseEntity } from "../../../core/entities/base-entity";


export class VerificationCo extends BaseEntity
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
        super('VerificationCo'); 

        this.email = email;
		this.password = password;
    }

}

