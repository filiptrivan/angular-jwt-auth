import { BaseEntity } from "../../../core/entities/base-entity";


export class VerificationToken extends BaseEntity
{
    email?: string;
	expireAt?: Date;
	email?: string;
	expireAt?: Date;

    constructor(
    {
        email,
		expireAt,
		email,
		expireAt
    }:{
        email?: string;
		expireAt?: Date;
		email?: string;
		expireAt?: Date;     
    } = {}
    ) {
        super('VerificationToken'); 

        this.email = email;
		this.expireAt = expireAt;
		this.email = email;
		this.expireAt = expireAt;
    }

}

