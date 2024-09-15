import { BaseEntity } from "../../../core/entities/base-entity";


export class VerificationCod extends BaseEntity
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
        super('VerificationCod'); 

        this.email = email;
		this.password = password;
    }

}

