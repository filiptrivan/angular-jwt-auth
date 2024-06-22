import { BaseEntity } from "../../../core/entities/base-entity";
import { Role } from "./role.generated";

export class LoginResult extends BaseEntity
{
    username?: string;
	email?: string;
	accessToken?: string;
	refreshToken?: string;
	roles?: Role[];

    constructor(
    {
        username,
		email,
		accessToken,
		refreshToken,
		roles
    }:{
        username?: string;
		email?: string;
		accessToken?: string;
		refreshToken?: string;
		roles?: Role[];     
    } = {}
    ) {
        super('LoginResult'); 

        this.username = username;
		this.email = email;
		this.accessToken = accessToken;
		this.refreshToken = refreshToken;
		this.roles = roles;
    }

}

