import { BaseEntity } from "../../../core/entities/base-entity";


export class VerificationToke extends BaseEntity
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
        super('VerificationToke'); 

        this.email = email;
		this.password = password;
    }

}

