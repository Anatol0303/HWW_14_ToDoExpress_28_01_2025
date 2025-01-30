import {Column, Entity, ObjectId, ObjectIdColumn, PrimaryGeneratedColumn} from "typeorm";


@Entity('todos')
export default class Todo {
    @ObjectIdColumn()
    id!: ObjectId;

    @Column()
    title!: string;

    @Column()
    message!: string;

    @Column({default: false})
    isCompleted!: boolean;
}