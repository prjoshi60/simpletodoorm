import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    categoryName: string

    @Column()
    categoryType: number

    @Column()
    userId: number

    @Column()
    description: string

    @Column()
    isActive: boolean

    @Column()
    createdDate: Date

    @Column()
    modifiedDate: Date

}