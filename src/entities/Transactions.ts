import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Transactions {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    userId: number

    @Column()
    accountId: string

    @Column()
    categoryId: string

    @Column()
    type: number


    @Column()
    amount: number

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