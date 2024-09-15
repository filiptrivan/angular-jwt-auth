import { BaseEntity } from "../../../core/entities/base-entity";


export class VerificationC extends BaseEntity
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
        super('VerificationC'); 

        this.email = email;
		this.password = password;
    }

}

