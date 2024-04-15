import { Module } from '@nestjs/common'
import { SizeService } from './size.service'
import { SizeController } from './size.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Size } from 'src/size/entities/size.entity'
import { CreateSizeDto } from './dtos/create-size.dto'

@Module({
	imports: [TypeOrmModule.forFeature([Size])],
	controllers: [SizeController],
	providers: [SizeService],
})
export class SizeModule {}
