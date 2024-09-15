import { BaseEntity } from "../../../core/entities/base-entity";


export class LogVerificationToken extends BaseEntity
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
        super('LogVerificationToken'); 

        this.email = email;
		this.expireAt = expireAt;
    }

}

