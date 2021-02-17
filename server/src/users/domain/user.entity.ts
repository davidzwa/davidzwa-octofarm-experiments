import { Column, Entity, ObjectID, ObjectIdColumn, Unique } from "typeorm";
import { nameof } from "../../utils/property-reflection.util";

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
    passwordHash: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ default: true })
    isActive: boolean;
}