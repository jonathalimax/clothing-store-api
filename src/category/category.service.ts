import { Injectable } from '@nestjs/common'
import { CreateCategoryDto } from './dto/create-category.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Category } from './entities/category.entity'
import { Repository } from 'typeorm'

@Injectable()
export class CategoryService {
	constructor(
		@InjectRepository(Category) private repository: Repository<Category>,
	) {}

	async create(createCategoryDto: CreateCategoryDto) {
		const category = this.repository.create(createCategoryDto)
		return await this.repository.save(category)
	}

	async findAll(): Promise<Category[]> {
		return await this.repository.find()
	}

	async remove(id: number): Promise<Category> {
		const category = await this.repository.findOneBy({ id })

		if (!category) return null

		return this.repository.remove(category)
	}
}
