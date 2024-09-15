import { BaseEntity } from "../../../core/entities/base-entity";
import { RegistrationVerificationResultStatusCodes } from "../../enums/generated/registration-verification-result-status-codes.generated";

export class RegistrationVerificationResultStatusCodes extends BaseEntity
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
        super('RegistrationVerificationResultStatusCodes'); 

        this.status = status;
		this.message = message;
    }

}

