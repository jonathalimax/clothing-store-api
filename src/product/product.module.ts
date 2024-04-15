import { Module } from '@nestjs/common'
import { ProductService } from './services/product.service'
import { ProductController } from './controllers/product.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Stock } from 'src/stock/entities/stock.entity'
import { Product } from './entities/product.entity'
import { StockModule } from 'src/stock/stock.module'

@Module({
	imports: [TypeOrmModule.forFeature([Product, Stock]), StockModule],
	controllers: [ProductController],
	providers: [ProductService],
})
export class ProductModule {}
