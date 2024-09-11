import { BaseEntity } from "../../../core/entities/base-entity";


export class Login extends BaseEntity
{
    email?: string;
	ipAddress?: string;
	isSuccessful?: boolean;
	isExternal?: boolean;
	id?: number;
	createdAt?: Date;
	password?: string;
	browserId?: string;

    constructor(
    {
        email,
		ipAddress,
		isSuccessful,
		isExternal,
		id,
		createdAt,
		password,
		browserId
    }:{
        email?: string;
		ipAddress?: string;
		isSuccessful?: boolean;
		isExternal?: boolean;
		id?: number;
		createdAt?: Date;
		password?: string;
		browserId?: string;     
    } = {}
    ) {
        super('Login'); 

        this.email = email;
		this.ipAddress = ipAddress;
		this.isSuccessful = isSuccessful;
		this.isExternal = isExternal;
		this.id = id;
		this.createdAt = createdAt;
		this.password = password;
		this.browserId = browserId;
    }

}

