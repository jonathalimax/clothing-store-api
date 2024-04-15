import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	JoinTable,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm'
import { Color } from '../../color/entities/color.entity'
import { Product } from '../../product/entities/product.entity'
import { Size } from '../../size/entities/size.entity'

@Entity()
export class Stock {
	@PrimaryGeneratedColumn()
	id: number

	@ManyToOne(() => Product, (product) => product.stock, {
		cascade: true,
		nullable: false,
	})
	@JoinTable()
	product: Product

	@ManyToOne(() => Color, {
		nullable: true,
	})
	@JoinColumn()
	color: Color

	@ManyToOne(() => Size, {
		nullable: true,
	})
	@JoinColumn()
	size: Size

	@Column()
	quantity: number

	@CreateDateColumn()
	createdAt: Date

	@UpdateDateColumn()
	updatedAt: Date
}
