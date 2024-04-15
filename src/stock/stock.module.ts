import { Module } from '@nestjs/common'
import { StockService } from './services/stock.service'
import { StockController } from './controllers/stock.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Stock } from './entities/stock.entity'
import { ColorModule } from 'src/color/color.module'
import { SizeModule } from 'src/size/size.module'

@Module({
	imports: [
		TypeOrmModule.forFeature([Stock]),
		ColorModule,
		SizeModule
	],
	controllers: [StockController],
	providers: [StockService],
	exports: [StockService]
})
export class StockModule {}
