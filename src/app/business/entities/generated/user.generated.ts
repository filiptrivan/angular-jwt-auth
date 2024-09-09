import { BaseEntity } from "../../../core/entities/base-entity";
import { Role } from "./role.generated";

export class User extends BaseEntity
{
    testColumnForGrid?: string;
	roles?: Role[];
	email?: string;
	password?: string;
	isDisabled?: boolean;
	hasLoggedInWithExternalProvider?: boolean;
	version?: number;
	id?: number;
	createdAt?: Date;
	modifiedAt?: Date;

    constructor(
    {
        testColumnForGrid,
		roles,
		email,
		password,
		isDisabled,
		hasLoggedInWithExternalProvider,
		version,
		id,
		createdAt,
		modifiedAt
    }:{
        testColumnForGrid?: string;
		roles?: Role[];
		email?: string;
		password?: string;
		isDisabled?: boolean;
		hasLoggedInWithExternalProvider?: boolean;
		version?: number;
		id?: number;
		createdAt?: Date;
		modifiedAt?: Date;     
    } = {}
    ) {
        super('User'); 

        this.testColumnForGrid = testColumnForGrid;
		this.roles = roles;
		this.email = email;
		this.password = password;
		this.isDisabled = isDisabled;
		this.hasLoggedInWithExternalProvider = hasLoggedInWithExternalProvider;
		this.version = version;
		this.id = id;
		this.createdAt = createdAt;
		this.modifiedAt = modifiedAt;
    }

}

