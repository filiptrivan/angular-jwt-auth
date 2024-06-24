import { BaseEntity } from "../../../core/entities/base-entity";
import { Role } from "./role.generated";

export class User extends BaseEntity
{
    testColumnForGrid?: string;
	roles?: Role[];
	username?: string;
	email?: string;
	password?: string;
	isDisabled?: boolean;
	version?: number;
	id?: number;
	createdAt?: Date;
	modifiedAt?: Date;

    constructor(
    {
        testColumnForGrid,
		roles,
		username,
		email,
		password,
		isDisabled,
		version,
		id,
		createdAt,
		modifiedAt
    }:{
        testColumnForGrid?: string;
		roles?: Role[];
		username?: string;
		email?: string;
		password?: string;
		isDisabled?: boolean;
		version?: number;
		id?: number;
		createdAt?: Date;
		modifiedAt?: Date;     
    } = {}
    ) {
        super('User'); 

        this.testColumnForGrid = testColumnForGrid;
		this.roles = roles;
		this.username = username;
		this.email = email;
		this.password = password;
		this.isDisabled = isDisabled;
		this.version = version;
		this.id = id;
		this.createdAt = createdAt;
		this.modifiedAt = modifiedAt;
    }

}

