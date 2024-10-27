import {
	BaseEntity,
	Column,
	Entity,
	PrimaryGeneratedColumn,
	ManyToMany,
} from "typeorm";
import { AdEntity } from "./Ad";

@Entity({ name: "tag" })
export class TagEntity extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column({ length: 200 })
	label!: string;

	@ManyToMany(
		() => AdEntity,
		(ad) => ad.tags,
	)
	ads!: AdEntity[];
}
