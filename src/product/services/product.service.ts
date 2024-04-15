import { Injectable } from '@nestjs/common'
import { CreateProductDto } from '../dto/create-product.dto'
import { UpdateProductDto } from '../dto/update-product.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Product } from '../entities/product.entity'
import { Repository } from 'typeorm'

@Injectable()
export class ProductService {
	constructor(
		@InjectRepository(Product) private repository: Repository<Product>,
	) {}

	async create(createProductDto: CreateProductDto): Promise<Product> {
		const newProduct = this.repository.create(createProductDto)
		return await this.repository.save(newProduct)
	}

	async findAll(): Promise<Product[]> {
		return await this.repository.find()
	}

	async findOne(id: number): Promise<Product> {
		return await this.repository.findOneBy({ id })
	}

	async update(id: number, updateProductDto: UpdateProductDto) {
		return `This action updates a #${id} product`
	}

	async remove(id: number) {
		const product = await this.repository.findOneBy({ id })

		if (!product) return null

		return this.repository.remove(product)
	}
}
