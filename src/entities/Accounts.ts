import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Accounts {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    accountName: string

    @Column()
    type: number

    @Column()
    userId: number

    @Column()
    accountBalance: number

    @Column()
    description: string

   
    @Column()
    isActive: boolean

    @Column()
    createdDate: Date

    @Column()
    modifiedDate: Date

}