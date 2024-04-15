import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common'
import { StockService } from '../services/stock.service'
import { CreateStockDto } from '../dtos/create-stock.dto'

@Controller('stock')
export class StockController {
	constructor(private readonly stockService: StockService) {}

	@Post()
	async create(@Body() createStockDto: CreateStockDto) {
		const stock = await this.stockService.create(createStockDto)
		console.log(stock)
		return stock
	}

	@Get('filtered')
	async findOneByProductId(@Query('productId') productId: number) {
		return await this.stockService.findOneByProductId(+productId)
	}

	@Get()
	async findAll() {
		console.log('findAll')
		return await this.stockService.findAll()
	}

	@Get(':id')
	async findOne(@Param('id') id: string) {
		console.log('findOne')
		return await this.stockService.findOne(+id)
	}
}
