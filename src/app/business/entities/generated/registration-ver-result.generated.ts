import { BaseEntity } from "../../../core/entities/base-entity";
import { RegistrationResultStatusCodes } from "../../enums/generated/registration-result-status-codes.generated";

export class RegistrationVerResult extends BaseEntity
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
        super('RegistrationVerResult'); 

        this.status = status;
		this.message = message;
    }

}

