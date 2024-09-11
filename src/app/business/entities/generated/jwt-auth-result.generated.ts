import { BaseEntity } from "../../../core/entities/base-entity";
import { RefreshToken } from "./refresh-token.generated";

export class JwtAuthResult extends BaseEntity
{
    accessToken?: string;
	userId?: number;
	userEmail?: string;
	refreshToken?: RefreshToken;

    constructor(
    {
        accessToken,
		userId,
		userEmail,
		refreshToken
    }:{
        accessToken?: string;
		userId?: number;
		userEmail?: string;
		refreshToken?: RefreshToken;     
    } = {}
    ) {
        super('JwtAuthResult'); 

        this.accessToken = accessToken;
		this.userId = userId;
		this.userEmail = userEmail;
		this.refreshToken = refreshToken;
    }

}

