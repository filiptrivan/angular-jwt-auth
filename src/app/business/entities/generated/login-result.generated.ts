import { BaseEntity } from "../../../core/entities/base-entity";


export class LoginResult extends BaseEntity
{
    userId?: number;
	email?: string;
	accessToken?: string;
	refreshToken?: string;

    constructor(
    {
        userId,
		email,
		accessToken,
		refreshToken
    }:{
        userId?: number;
		email?: string;
		accessToken?: string;
		refreshToken?: string;     
    } = {}
    ) {
        super('LoginResult'); 

        this.userId = userId;
		this.email = email;
		this.accessToken = accessToken;
		this.refreshToken = refreshToken;
    }

}

