import { BaseEntity } from "../../../core/entities/base-entity";
import { RefreshToken } from "./refresh-token.generated";

export class JwtAuthResult extends BaseEntity
{
    accessToken?: string;
	refreshToken?: RefreshToken;

    constructor(
    {
        accessToken,
		refreshToken
    }:{
        accessToken?: string;
		refreshToken?: RefreshToken;     
    } = {}
    ) {
        super('JwtAuthResult'); 

        this.accessToken = accessToken;
		this.refreshToken = refreshToken;
    }

}

