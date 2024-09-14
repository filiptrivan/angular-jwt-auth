import { BaseEntity } from "../../../core/entities/base-entity";


export class RefreshToken extends BaseEntity
{
    email?: string;
	ipAddress?: string;
	browserId?: string;
	tokenString?: string;
	expireAt?: Date;
	password?: string;

    constructor(
    {
        email,
		ipAddress,
		browserId,
		tokenString,
		expireAt,
		password
    }:{
        email?: string;
		ipAddress?: string;
		browserId?: string;
		tokenString?: string;
		expireAt?: Date;
		password?: string;     
    } = {}
    ) {
        super('RefreshToken'); 

        this.email = email;
		this.ipAddress = ipAddress;
		this.browserId = browserId;
		this.tokenString = tokenString;
		this.expireAt = expireAt;
		this.password = password;
    }

}

