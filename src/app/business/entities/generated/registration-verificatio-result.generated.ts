import { BaseEntity } from "../../../core/entities/base-entity";
import { RegistrationResultStatusCodes } from "../../enums/generated/registration-result-status-codes.generated";

export class RegistrationVerificatioResult extends BaseEntity
{
    status?: RegistrationResultStatusCodes;
	message?: string;

    constructor(
    {
        status,
		message
    }:{
        status?: RegistrationResultStatusCodes;
		message?: string;     
    } = {}
    ) {
        super('RegistrationVerificatioResult'); 

        this.status = status;
		this.message = message;
    }

}

