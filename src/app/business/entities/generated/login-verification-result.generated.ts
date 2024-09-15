import { BaseEntity } from "../../../core/entities/base-entity";
import { LoginVerificationResultStatusCodes } from "../../enums/generated/login-verification-result-status-codes.generated";

export class LoginVerificationResult extends BaseEntity
{
    status?: LoginVerificationResultStatusCodes;
	message?: string;

    constructor(
    {
        status,
		message
    }:{
        status?: LoginVerificationResultStatusCodes;
		message?: string;     
    } = {}
    ) {
        super('LoginVerificationResult'); 

        this.status = status;
		this.message = message;
    }

}

