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

import { CategoryEntity } from "./Category";
import { TagEntity } from "./Tag";

@Entity({ name: "ad" })
@ObjectType()
export class AdEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id!: number;

  @Column({ length: 200 })
  @Field()
  title!: string;

  @Column()
  @Field()
  description!: string;

  @Column()
  @Field()
  owner!: string;

  @Column()
  @Field()
  price!: number;

  @Column()
  @Field()
  pictureUrl?: string;

  @Column()
  @Field()
  location!: string;

  @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
  @Field()
  createdAt: Date = new Date();

  @Column({ type: "datetime", nullable: true })
  @Field({ nullable: true })
  updatedAt?: Date;

  @ManyToOne(
    () => CategoryEntity,
    (category) => category.ads,
  )
  @JoinColumn({ name: "category" })
  @Field()
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
  tags!: TagEntity[];
}
