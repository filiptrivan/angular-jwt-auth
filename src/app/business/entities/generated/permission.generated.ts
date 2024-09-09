import { BaseEntity } from "../../../core/entities/base-entity";


export class Permission extends BaseEntity
{
    name?: string;
	description?: string;
	id?: number;
	createdAt?: Date;

    constructor(
    {
        name,
		description,
		id,
		createdAt
    }:{
        name?: string;
		description?: string;
		id?: number;
		createdAt?: Date;     
    } = {}
    ) {
        super('Permission'); 

        this.name = name;
		this.description = description;
		this.id = id;
		this.createdAt = createdAt;
    }

}

