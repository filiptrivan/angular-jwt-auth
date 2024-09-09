import { BaseEntity } from "../../../core/entities/base-entity";


export class Login extends BaseEntity
{
    password?: string;
	email?: string;
	ipAddress?: string;
	isSuccessful?: boolean;
	isExternal?: boolean;
	id?: number;
	createdAt?: Date;

    constructor(
    {
        password,
		email,
		ipAddress,
		isSuccessful,
		isExternal,
		id,
		createdAt
    }:{
        password?: string;
		email?: string;
		ipAddress?: string;
		isSuccessful?: boolean;
		isExternal?: boolean;
		id?: number;
		createdAt?: Date;     
    } = {}
    ) {
        super('Login'); 

        this.password = password;
		this.email = email;
		this.ipAddress = ipAddress;
		this.isSuccessful = isSuccessful;
		this.isExternal = isExternal;
		this.id = id;
		this.createdAt = createdAt;
    }

}

