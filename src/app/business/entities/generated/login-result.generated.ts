import { BaseEntity } from "../../../core/entities/base-entity";
import { Role } from "./role.generated";

export class LoginResult extends BaseEntity
{
    email?: string;
	accessToken?: string;
	refreshToken?: string;
	roles?: Role[];

    constructor(
    {
        email,
		accessToken,
		refreshToken,
		roles
    }:{
        email?: string;
		accessToken?: string;
		refreshToken?: string;
		roles?: Role[];     
    } = {}
    ) {
        super('LoginResult'); 

        this.email = email;
		this.accessToken = accessToken;
		this.refreshToken = refreshToken;
		this.roles = roles;
    }

}

