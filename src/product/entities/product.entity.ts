import {
	Column,
	CreateDateColumn,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm'
import { Stock } from './stock.entity'

@Entity()
export class Product {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string

	@Column()
	description: string

	@Column()
	price: number

	@Column()
	promotionalPrice: number

    @OneToMany(() => Stock, stock => stock.id)
    stock: Stock[]

	@CreateDateColumn()
	createdAt: Date

	@UpdateDateColumn()
	updatedAt: Date
}
