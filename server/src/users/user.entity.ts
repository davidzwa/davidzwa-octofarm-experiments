import { Entity, Column, ObjectIdColumn, ObjectID, Unique } from "typeorm";

const nameof = <T>(name: keyof T): string => name as string;

@Entity()
// https://typeorm.io/#/decorator-reference/unique
// @Unique("UQ_NAMES", [nameof<User>("userName")])
@Unique([nameof<User>("userName")])
export class User {
    // Avoid @PrimaryGeneratedColumn() for MongoDB as its not compatible
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    userName: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ default: true })
    isActive: boolean;
}