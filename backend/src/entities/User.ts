import {
	BaseEntity,
	Column,
	Entity,
	ManyToOne,
	ManyToMany,
	JoinTable,
	JoinColumn,
	PrimaryGeneratedColumn,
} from "typeorm";

import { ObjectType, Field } from "type-graphql";

@Entity({ name: "user" })
@ObjectType()
export class UserEntity extends BaseEntity {
	@PrimaryGeneratedColumn()
	@Field()
	id!: number;

	@Column({ unique: true })
	@Field()
	username!: string;

	@Column({ unique: true, nullable: false })
	@Field()
	email!: string;

	@Column()
	@Field()
	password!: string;
}
