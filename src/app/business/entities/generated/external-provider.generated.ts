import { BaseEntity } from "../../../core/entities/base-entity";


export class ExternalProvider extends BaseEntity
{
    provider?: string;
	idToken?: string;

    constructor(
    {
        provider,
		idToken
    }:{
        provider?: string;
		idToken?: string;     
    } = {}
    ) {
        super('ExternalProvider'); 

        this.provider = provider;
		this.idToken = idToken;
    }

}

