import { BaseEntity } from "../../../core/entities/base-entity";


export class LogiVerificationToken extends BaseEntity
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
        super('LogiVerificationToken'); 

        this.email = email;
		this.expireAt = expireAt;
    }

}

