import { BaseEntity } from "../../../core/entities/base-entity";


export class VerificationTok extends BaseEntity
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
        super('VerificationTok'); 

        this.email = email;
		this.password = password;
    }

}

