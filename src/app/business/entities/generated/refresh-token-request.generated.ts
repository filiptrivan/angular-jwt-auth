import { BaseEntity } from "../../../core/entities/base-entity";


export class RefreshTokenRequest extends BaseEntity
{
    refreshToken?: string;

    constructor(
    {
        refreshToken
    }:{
        refreshToken?: string;     
    } = {}
    ) {
        super('RefreshTokenRequest'); 

        this.refreshToken = refreshToken;
    }

}

