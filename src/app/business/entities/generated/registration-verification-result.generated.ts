import { BaseEntity } from "../../../core/entities/base-entity";
import { RegistrationVerificationResultStatusCodes } from "../../enums/generated/registration-verification-result-status-codes.generated";

export class RegistrationVerificationResult extends BaseEntity
{
    status?: RegistrationVerificationResultStatusCodes;
	message?: string;

    constructor(
    {
        status,
		message
    }:{
        status?: RegistrationVerificationResultStatusCodes;
		message?: string;     
    } = {}
    ) {
        super('RegistrationVerificationResult'); 

        this.status = status;
		this.message = message;
    }

}

