import { Field, ID, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { Length, IsNotEmpty } from "class-validator";

@Entity()
@ObjectType()
export class Country extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column({ unique: true })
  @Field()
  @Length(2, 3, { message: "Le code doit contenir 2 ou 3 caractères" })
  @IsNotEmpty({ message: "Le code ne peut pas être vide" })
  code: string;

  @Column()
  @Field()
  @IsNotEmpty({ message: "Le nom ne peut pas être vide" })
  name: string;

  @Column()
  @Field()
  @IsNotEmpty({ message: "L'emoji ne peut pas être vide" })
  emoji: string;
}