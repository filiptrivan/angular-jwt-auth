import { BaseEntity } from "../../../core/entities/base-entity";


export class RegistrationVerificationToken extends BaseEntity
{
    password?: string;
	email?: string;
	expireAt?: Date;

    constructor(
    {
        password,
		email,
		expireAt
    }:{
        password?: string;
		email?: string;
		expireAt?: Date;     
    } = {}
    ) {
        super('RegistrationVerificationToken'); 

        this.password = password;
		this.email = email;
		this.expireAt = expireAt;
    }

}

