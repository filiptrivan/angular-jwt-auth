import { BaseEntity } from "../../../core/entities/base-entity";
import { Role } from "./role.generated";

export class User extends BaseEntity
{
    email?: string;
	password?: string;
	hasLoggedInWithExternalProvider?: boolean;
	numberOfFailedAttemptsInARow?: number;
	isVerified?: boolean;
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
		hasLoggedInWithExternalProvider,
		numberOfFailedAttemptsInARow,
		isVerified,
		version,
		id,
		createdAt,
		modifiedAt,
		testColumnForGrid,
		roles
    }:{
        email?: string;
		password?: string;
		hasLoggedInWithExternalProvider?: boolean;
		numberOfFailedAttemptsInARow?: number;
		isVerified?: boolean;
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
		this.hasLoggedInWithExternalProvider = hasLoggedInWithExternalProvider;
		this.numberOfFailedAttemptsInARow = numberOfFailedAttemptsInARow;
		this.isVerified = isVerified;
		this.version = version;
		this.id = id;
		this.createdAt = createdAt;
		this.modifiedAt = modifiedAt;
		this.testColumnForGrid = testColumnForGrid;
		this.roles = roles;
    }

}

