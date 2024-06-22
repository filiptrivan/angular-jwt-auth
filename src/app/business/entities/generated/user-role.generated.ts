import { BaseEntity } from "../../../core/entities/base-entity";


export class UserRole extends BaseEntity
{
    userId?: number;
	userDisplayName?: string;
	roleId?: number;
	roleDisplayName?: string;

    constructor(
    {
        userId,
		userDisplayName,
		roleId,
		roleDisplayName
    }:{
        userId?: number;
		userDisplayName?: string;
		roleId?: number;
		roleDisplayName?: string;     
    } = {}
    ) {
        super('UserRole'); 

        this.userId = userId;
		this.userDisplayName = userDisplayName;
		this.roleId = roleId;
		this.roleDisplayName = roleDisplayName;
    }

}

