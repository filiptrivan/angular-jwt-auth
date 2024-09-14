import { BaseEntity } from "../../../core/entities/base-entity";


export class VerificationToken extends BaseEntity
{
    password?: string;
	email?: string;
	ipAddress?: string;
	browserId?: string;
	tokenString?: string;
	expireAt?: Date;

    constructor(
    {
        password,
		email,
		ipAddress,
		browserId,
		tokenString,
		expireAt
    }:{
        password?: string;
		email?: string;
		ipAddress?: string;
		browserId?: string;
		tokenString?: string;
		expireAt?: Date;     
    } = {}
    ) {
        super('VerificationToken'); 

        this.password = password;
		this.email = email;
		this.ipAddress = ipAddress;
		this.browserId = browserId;
		this.tokenString = tokenString;
		this.expireAt = expireAt;
    }

}

