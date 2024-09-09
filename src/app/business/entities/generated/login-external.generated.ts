import { BaseEntity } from "../../../core/entities/base-entity";


export class LoginExternal extends BaseEntity
{
    isExternal?: boolean;
	email?: string;
	ipAddress?: string;
	isSuccessful?: boolean;
	isExternal?: boolean;
	id?: number;
	createdAt?: Date;

    constructor(
    {
        isExternal,
		email,
		ipAddress,
		isSuccessful,
		isExternal,
		id,
		createdAt
    }:{
        isExternal?: boolean;
		email?: string;
		ipAddress?: string;
		isSuccessful?: boolean;
		isExternal?: boolean;
		id?: number;
		createdAt?: Date;     
    } = {}
    ) {
        super('LoginExternal'); 

        this.isExternal = isExternal;
		this.email = email;
		this.ipAddress = ipAddress;
		this.isSuccessful = isSuccessful;
		this.isExternal = isExternal;
		this.id = id;
		this.createdAt = createdAt;
    }

}

