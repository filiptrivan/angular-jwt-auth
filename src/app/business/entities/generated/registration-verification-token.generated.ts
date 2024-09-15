import { BaseEntity } from "../../../core/entities/base-entity";


export class RegistrationVerificationToken extends BaseEntity
{
    email?: string;
	password?: string;
	browserId?: string;
	expireAt?: Date;

    constructor(
    {
        email,
		password,
		browserId,
		expireAt
    }:{
        email?: string;
		password?: string;
		browserId?: string;
		expireAt?: Date;     
    } = {}
    ) {
        super('RegistrationVerificationToken'); 

        this.email = email;
		this.password = password;
		this.browserId = browserId;
		this.expireAt = expireAt;
    }

}

