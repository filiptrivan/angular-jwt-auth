import { BaseEntity } from "../../../core/entities/base-entity";
import { Role } from "./role.generated";

export class User extends BaseEntity
{
    username?: string;
	email?: string;
	password?: string;
	isDisabled?: boolean;
	version?: number;
	id?: number;
	createdAt?: Date;
	modifiedAt?: Date;
	testColumnForGrid?: string;
	roles?: Role[];

    constructor(
    {
        username,
		email,
		password,
		isDisabled,
		version,
		id,
		createdAt,
		modifiedAt,
		testColumnForGrid,
		roles
    }:{
        username?: string;
		email?: string;
		password?: string;
		isDisabled?: boolean;
		version?: number;
		id?: number;
		createdAt?: Date;
		modifiedAt?: Date;
		testColumnForGrid?: string;
		roles?: Role[];     
    } = {}
    ) {
        super('User'); 

        this.username = username;
		this.email = email;
		this.password = password;
		this.isDisabled = isDisabled;
		this.version = version;
		this.id = id;
		this.createdAt = createdAt;
		this.modifiedAt = modifiedAt;
		this.testColumnForGrid = testColumnForGrid;
		this.roles = roles;
    }

}

