import { BaseEntity } from "../../../core/entities/base-entity";
import { RegistrationResultStatusCodes } from "../../enums/generated/registration-result-status-codes.generated";

export class RegistrationVerifResult extends BaseEntity
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
        super('RegistrationVerifResult'); 

        this.status = status;
		this.message = message;
    }

}

