import { BaseEntity } from "../../../core/entities/base-entity";


export class Login extends BaseEntity
{
    password?: string;
	username?: string;
	ipAddress?: string;
	isSuccessful?: boolean;
	id?: number;
	createdAt?: Date;

    constructor(
    {
        password,
		username,
		ipAddress,
		isSuccessful,
		id,
		createdAt
    }:{
        password?: string;
		username?: string;
		ipAddress?: string;
		isSuccessful?: boolean;
		id?: number;
		createdAt?: Date;     
    } = {}
    ) {
        super('Login'); 

        this.password = password;
		this.username = username;
		this.ipAddress = ipAddress;
		this.isSuccessful = isSuccessful;
		this.id = id;
		this.createdAt = createdAt;
    }

}

