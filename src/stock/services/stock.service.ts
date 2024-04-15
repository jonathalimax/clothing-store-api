import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository, getRepository } from 'typeorm'
import { Stock } from '../entities/stock.entity'
import { CreateStockDto } from '../dtos/create-stock.dto'

@Injectable()
export class StockService {
	constructor(
		@InjectRepository(Stock) private stockRepository: Repository<Stock>,
	) {}

	async create(createStockDTO: CreateStockDto): Promise<Stock> {
		// Fetch product, color, and size entities in one query
		const { productId, colorId, sizeId, quantity } = createStockDTO
		const newStock = this.stockRepository.create({
			product: { id: productId },
			color: { id: colorId },
			size: { id: sizeId },
			quantity,
		})
		return await this.stockRepository.save(newStock)
	}

	async findAll(): Promise<Stock[]> {
		return await this.stockRepository
			.createQueryBuilder('stock')
			.leftJoinAndSelect('stock.product', 'product')
			.leftJoinAndSelect('stock.color', 'color')
			.leftJoinAndSelect('stock.size', 'size')
			.getMany()
	}

	async findOne(id: number): Promise<Stock[]> {
		return await this.stockRepository
			.createQueryBuilder('stock')
			.leftJoinAndSelect('stock.product', 'product')
			.leftJoinAndSelect('stock.color', 'color')
			.leftJoinAndSelect('stock.size', 'size')
			.where('stock.id = :id', { id })
			.getMany()
	}

	async findOneByProductId(productId: number): Promise<Stock[]> {
		return await this.stockRepository
			.createQueryBuilder('stock')
			.leftJoinAndSelect('stock.product', 'product')
			.leftJoinAndSelect('stock.color', 'color')
			.leftJoinAndSelect('stock.size', 'size')
			.where('product.id = :productId', { productId })
			.getMany()
	}
}
