import { BaseEntity } from "../../../core/entities/base-entity";


export class VerificationCode extends BaseEntity
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
        super('VerificationCode'); 

        this.email = email;
		this.password = password;
    }

}

