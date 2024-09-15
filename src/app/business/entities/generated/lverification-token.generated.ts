import { BaseEntity } from "../../../core/entities/base-entity";


export class LVerificationToken extends BaseEntity
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
        super('LVerificationToken'); 

        this.email = email;
		this.expireAt = expireAt;
    }

}

