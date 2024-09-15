import { BaseEntity } from "../../../core/entities/base-entity";


export class VerificationTokenRequest extends BaseEntity
{
    verificationCode?: string;
	browserId?: string;
	email?: string;

    constructor(
    {
        verificationCode,
		browserId,
		email
    }:{
        verificationCode?: string;
		browserId?: string;
		email?: string;     
    } = {}
    ) {
        super('VerificationTokenRequest'); 

        this.verificationCode = verificationCode;
		this.browserId = browserId;
		this.email = email;
    }

}

