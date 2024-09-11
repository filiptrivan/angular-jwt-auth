import { BaseEntity } from "../../../core/entities/base-entity";
import { Role } from "./role.generated";

export class User extends BaseEntity
{
    email?: string;
	password?: string;
	isDisabled?: boolean;
	hasLoggedInWithExternalProvider?: boolean;
	version?: number;
	id?: number;
	createdAt?: Date;
	modifiedAt?: Date;
	testColumnForGrid?: string;
	roles?: Role[];

    constructor(
    {
        email,
		password,
		isDisabled,
		hasLoggedInWithExternalProvider,
		version,
		id,
		createdAt,
		modifiedAt,
		testColumnForGrid,
		roles
    }:{
        email?: string;
		password?: string;
		isDisabled?: boolean;
		hasLoggedInWithExternalProvider?: boolean;
		version?: number;
		id?: number;
		createdAt?: Date;
		modifiedAt?: Date;
		testColumnForGrid?: string;
		roles?: Role[];     
    } = {}
    ) {
        super('User'); 

        this.email = email;
		this.password = password;
		this.isDisabled = isDisabled;
		this.hasLoggedInWithExternalProvider = hasLoggedInWithExternalProvider;
		this.version = version;
		this.id = id;
		this.createdAt = createdAt;
		this.modifiedAt = modifiedAt;
		this.testColumnForGrid = testColumnForGrid;
		this.roles = roles;
    }

}

