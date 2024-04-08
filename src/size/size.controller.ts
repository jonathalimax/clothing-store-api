import { Body, Controller, Get, NotFoundException, Post } from '@nestjs/common';
import { SizeService } from './size.service';
import { CreateSizeDto } from './dtos/create-size.dto';

@Controller('size')
export class SizeController {
  constructor(private readonly sizeService: SizeService) {}

  @Get()
  async findAll() {
    const sizes = await this.sizeService.findAll()

		if (sizes.length == 0)
			throw new NotFoundException('There is no size available')

		return sizes
  }

  @Post()
  async create(@Body() body: CreateSizeDto) {
    return await this.sizeService.create(body)
  }
}
