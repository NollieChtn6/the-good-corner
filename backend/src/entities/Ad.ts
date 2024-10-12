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
import { CategoryEntity } from "./Category";
import { TagEntity } from "./Tag";

@Entity({ name: "ad" })
export class AdEntity extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column({ length: 200 })
	title!: string;

	@Column()
	description!: string;

	@Column()
	owner!: string;

	@Column()
	price!: number;

	@Column()
	pictureUrl?: string;

	@Column()
	location!: string;

	@Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
	createdAt: Date = new Date();

	@Column({ type: "datetime", nullable: true })
	updatedAt?: Date;

	@ManyToOne(
		() => CategoryEntity,
		(category) => category.ads,
	)
	@JoinColumn({ name: "category" })
	category!: CategoryEntity;

	@ManyToOne(
		() => CategoryEntity,
		(category) => category.ads,
	)

	@ManyToMany(() => TagEntity, { cascade: true })
	@JoinTable({
		name: "ad_has_tags",
		joinColumn: {
			name: "adId",
			referencedColumnName: "id",
		},
		inverseJoinColumn: {
			name: "tagId",
			referencedColumnName: "id",
		},
	})
	tags?: TagEntity[];
}
