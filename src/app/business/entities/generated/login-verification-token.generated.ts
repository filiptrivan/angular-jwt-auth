import { BaseEntity } from "../../../core/entities/base-entity";


export class LoginVerificationToken extends BaseEntity
{
    email?: string;
	userId?: number;
	browserId?: string;
	expireAt?: Date;

    constructor(
    {
        email,
		userId,
		browserId,
		expireAt
    }:{
        email?: string;
		userId?: number;
		browserId?: string;
		expireAt?: Date;     
    } = {}
    ) {
        super('LoginVerificationToken'); 

        this.email = email;
		this.userId = userId;
		this.browserId = browserId;
		this.expireAt = expireAt;
    }

}

