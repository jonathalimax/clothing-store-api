import { Body, Controller, Get, NotFoundException, Post } from '@nestjs/common';
import { ColorService } from 'src/color/color.service';
import { CreateColorDto } from './dtos/create-color.dto';

@Controller('color')
export class ColorController {
    constructor(private colorService: ColorService) {}

    @Get()
    async findAll() {
        const colors = await this.colorService.findAll()
        
        if (colors.length == 0)
            throw new NotFoundException('There is no color available')

        return colors
    }

    @Post()
    async create(@Body() body: CreateColorDto) {
        return await this.colorService.create(body)
    }
}
