import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
} from '@nestjs/common'
import { ProductService } from '../services/product.service'
import { UpdateProductDto } from '../dto/update-product.dto'
import { StockService } from 'src/stock/services/stock.service'
import { CreateProductStockDto } from '../dto/product-stock.dto'
import { Transactional } from 'typeorm-transactional'

@Controller('product')
export class ProductController {
	constructor(
		private readonly productService: ProductService,
		private readonly stockService: StockService,
	) {}

	@Post()
	@Transactional()
	async create(@Body() createProductStockDto: CreateProductStockDto) {
		const { product, stock } = createProductStockDto

		const createProduct = await this.productService.create(product)

		const createStockPromises = stock.map((data) => {
			data.productId = createProduct.id
			return this.stockService.create(data)
		})

		await Promise.all(createStockPromises)
	}

	@Get()
	findAll() {
		return this.productService.findAll()
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.productService.findOne(+id)
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
		return this.productService.update(+id, updateProductDto)
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.productService.remove(+id)
	}
}
