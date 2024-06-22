import { BaseEntity } from "../../../core/entities/base-entity";
import { string } from "./string.generated";

export class RefreshToken extends BaseEntity
{
    username?: string;
	email?: string;
	roles?: string[];
	ipAddress?: string;
	tokenString?: string;
	expireAt?: Date;

    constructor(
    {
        username,
		email,
		roles,
		ipAddress,
		tokenString,
		expireAt
    }:{
        username?: string;
		email?: string;
		roles?: string[];
		ipAddress?: string;
		tokenString?: string;
		expireAt?: Date;     
    } = {}
    ) {
        super('RefreshToken'); 

        this.username = username;
		this.email = email;
		this.roles = roles;
		this.ipAddress = ipAddress;
		this.tokenString = tokenString;
		this.expireAt = expireAt;
    }

}

