import {
	BaseEntity,
	Column,
	Entity,
	PrimaryGeneratedColumn,
	ManyToMany,
} from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { AdEntity } from "./Ad";

@Entity({ name: "tag" })
@ObjectType()
export class TagEntity extends BaseEntity {
	@PrimaryGeneratedColumn()
	@Field()
	id!: number;

	@Column({ length: 200 })
	@Field()
	label!: string;

	@ManyToMany(
		() => AdEntity,
		(ad) => ad.tags,
	)
	ads!: AdEntity[];
}
