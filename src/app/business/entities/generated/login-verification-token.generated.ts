import { BaseEntity } from "../../../core/entities/base-entity";


export class LoginVerificationToken extends BaseEntity
{
    email?: string;
	expireAt?: Date;

    constructor(
    {
        email,
		expireAt
    }:{
        email?: string;
		expireAt?: Date;     
    } = {}
    ) {
        super('LoginVerificationToken'); 

        this.email = email;
		this.expireAt = expireAt;
    }

}

