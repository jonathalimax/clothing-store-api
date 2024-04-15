import { Stock } from 'src/stock/entities/stock.entity'
import {
	Column,
	CreateDateColumn,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm'

@Entity()
export class Product {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string

	@Column()
	description: string

	@Column()
	@Column({ type: 'decimal', precision: 10, scale: 2 })
	price: number

	@Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
	promotionalPrice: number

	@OneToMany(() => Stock, (stock) => stock.id)
	stock: Stock[]

	@CreateDateColumn()
	createdAt: Date

	@UpdateDateColumn()
	updatedAt: Date
}
