import { BaseEntity } from "../../../core/entities/base-entity";


export class ExternalProvider extends BaseEntity
{
    provider?: string;
	idToken?: string;
	browserId?: string;

    constructor(
    {
        provider,
		idToken,
		browserId
    }:{
        provider?: string;
		idToken?: string;
		browserId?: string;     
    } = {}
    ) {
        super('ExternalProvider'); 

        this.provider = provider;
		this.idToken = idToken;
		this.browserId = browserId;
    }

}

