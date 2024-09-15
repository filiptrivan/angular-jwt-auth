import { BaseEntity } from "../../../core/entities/base-entity";


export class LoVerificationToken extends BaseEntity
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
        super('LoVerificationToken'); 

        this.email = email;
		this.expireAt = expireAt;
    }

}

