import { Category } from 'src/category/entities/category.entity'
import {
    Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	OneToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm'

@Entity()
export class Feed {
	@PrimaryGeneratedColumn()
	id: number

    @Column({ default: true })
    active: boolean

	@OneToOne(() => Category, { nullable: false })
	@JoinColumn()
	categories: Category

	@CreateDateColumn()
	createdAt: Date

	@UpdateDateColumn()
	updatedAt: Date
}
