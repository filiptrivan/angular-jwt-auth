import { BaseEntity } from "../../../core/entities/base-entity";


export class VerificationTokenRequest extends BaseEntity
{
    verificationToken?: string;
	accessToken?: string;
	browserId?: string;

    constructor(
    {
        verificationToken,
		accessToken,
		browserId
    }:{
        verificationToken?: string;
		accessToken?: string;
		browserId?: string;     
    } = {}
    ) {
        super('VerificationTokenRequest'); 

        this.verificationToken = verificationToken;
		this.accessToken = accessToken;
		this.browserId = browserId;
    }

}

