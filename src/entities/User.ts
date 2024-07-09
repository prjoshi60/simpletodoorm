import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    email: string

    @Column()
    isActive: boolean

    @Column()
    createdDate: Date

    @Column()
    modifiedData: Date

}