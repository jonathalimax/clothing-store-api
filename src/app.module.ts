import { Module } from '@nestjs/common'
import { FeedModule } from './feed/feed.module'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserModule } from './user/user.module'
import { Users } from './user/entities/users.entity'
import { ProductModule } from './product/product.module'
import { Product } from './product/entities/product.entity'
import { Size } from './size/entities/size.entity'
import { Color } from './color/entities/color.entity'
import { Stock } from './stock/entities/stock.entity'
import { CategoryModule } from './category/category.module'
import { Category } from './category/entities/category.entity'
import { Feed } from './feed/entities/feed.entity'
import { ColorModule } from './color/color.module'
import { SizeModule } from './size/size.module'
import { StockModule } from './stock/stock.module'
import { addTransactionalDataSource } from 'typeorm-transactional'
import { DataSource } from 'typeorm'

@Module({
	imports: [
		FeedModule,
		ConfigModule.forRoot({ isGlobal: true }),
		TypeOrmModule.forRootAsync({
			useFactory() {
				return {
					type: 'postgres',
					url: process.env.DIRECT_URL,
					entities: [Users, Size, Color, Product, Stock, Category, Feed],
					synchronize: true,
				}
			},
			async dataSourceFactory(options) {
				if (!options) throw new Error('Invalid options passed')
				return addTransactionalDataSource(new DataSource(options))
			},
		}),
		UserModule,
		ProductModule,
		CategoryModule,
		ColorModule,
		SizeModule,
		StockModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
