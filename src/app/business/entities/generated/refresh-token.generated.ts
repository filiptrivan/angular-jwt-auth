import { BaseEntity } from "../../../core/entities/base-entity";


export class RefreshToken extends BaseEntity
{
    email?: string;
	roles?: string[];
	ipAddress?: string;
	tokenString?: string;
	expireAt?: Date;

    constructor(
    {
        email,
		roles,
		ipAddress,
		tokenString,
		expireAt
    }:{
        email?: string;
		roles?: string[];
		ipAddress?: string;
		tokenString?: string;
		expireAt?: Date;     
    } = {}
    ) {
        super('RefreshToken'); 

        this.email = email;
		this.roles = roles;
		this.ipAddress = ipAddress;
		this.tokenString = tokenString;
		this.expireAt = expireAt;
    }

}

