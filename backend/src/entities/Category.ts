import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { AdEntity } from "./Ad";

@Entity({ name: "category" })
@ObjectType()
export class CategoryEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id!: number;

  @Column({ length: 200 })
  @Field()
  name!: string;

  @Field(() => [AdEntity])
  @OneToMany(
    () => AdEntity,
    (ad) => ad.category,
  )
  ads!: AdEntity[];
}
