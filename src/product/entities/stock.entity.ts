import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	JoinTable,
	ManyToOne,
	OneToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm'
import { Color } from '../../color/entities/color.entity'
import { Product } from './product.entity'
import { Size } from '../../size/entities/size.entity'

@Entity()
export class Stock {
	@PrimaryGeneratedColumn()
	id: number

	@ManyToOne(() => Product, (product) => product.stock, {
		cascade: true,
        nullable: false
	})
	@JoinTable()
	products: Product[]

	@OneToOne(() => Color, {
        nullable: false
    })
	@JoinColumn()
	color: Color

    @OneToOne(() => Size, {
        nullable: false
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
