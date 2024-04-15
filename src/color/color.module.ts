import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Color } from 'src/color/entities/color.entity'
import { ColorController } from './color.controller'
import { ColorService } from './color.service'
import { CreateColorDto } from './dtos/create-color.dto'

@Module({
	imports: [TypeOrmModule.forFeature([Color])],
	controllers: [ColorController],
	providers: [ColorService],
})
export class ColorModule {}
