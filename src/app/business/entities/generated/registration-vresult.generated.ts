import { BaseEntity } from "../../../core/entities/base-entity";
import { RegistrationResultStatusCodes } from "../../enums/generated/registration-result-status-codes.generated";

export class RegistrationVResult extends BaseEntity
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
        super('RegistrationVResult'); 

        this.status = status;
		this.message = message;
    }

}

