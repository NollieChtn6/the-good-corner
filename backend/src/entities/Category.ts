import {
	BaseEntity,
	Column,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
} from "typeorm";
import { AdEntity } from "./Ad";

@Entity({ name: "category" })
export class CategoryEntity extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column({ length: 200 })
	name!: string;

	@OneToMany(
		() => AdEntity,
		(ad) => ad.category,
	)
	ads!: AdEntity[];
}
