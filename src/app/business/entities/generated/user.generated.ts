import { BaseEntity } from "../../../core/entities/base-entity";
import { Role } from "./role.generated";

export class User extends BaseEntity
{
    testColumnForGrid?: string;
	roles?: Role[];
	email?: string;
	password?: string;
	hasLoggedInWithExternalProvider?: boolean;
	numberOfFailedAttemptsInARow?: number;
	isVerified?: boolean;
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
		hasLoggedInWithExternalProvider,
		numberOfFailedAttemptsInARow,
		isVerified,
		version,
		id,
		createdAt,
		modifiedAt
    }:{
        testColumnForGrid?: string;
		roles?: Role[];
		email?: string;
		password?: string;
		hasLoggedInWithExternalProvider?: boolean;
		numberOfFailedAttemptsInARow?: number;
		isVerified?: boolean;
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
		this.hasLoggedInWithExternalProvider = hasLoggedInWithExternalProvider;
		this.numberOfFailedAttemptsInARow = numberOfFailedAttemptsInARow;
		this.isVerified = isVerified;
		this.version = version;
		this.id = id;
		this.createdAt = createdAt;
		this.modifiedAt = modifiedAt;
    }

}

