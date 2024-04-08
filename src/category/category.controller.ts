import {
	Controller,
	Get,
	Post,
	Body,
	Param,
	Delete,
	NotFoundException,
} from '@nestjs/common'
import { CategoryService } from './category.service'
import { CreateCategoryDto } from './dto/create-category.dto'

@Controller('category')
export class CategoryController {
	constructor(private readonly categoryService: CategoryService) {}

	@Post()
	async create(@Body() createCategoryDto: CreateCategoryDto) {
		return await this.categoryService.create(createCategoryDto)
	}

	@Get()
	async findAll() {
		const categories = await this.categoryService.findAll()

		if (categories.length == 0)
			throw new NotFoundException('There is no categories available')

		return categories
	}

	@Delete(':id')
	async remove(@Param('id') id: string) {
		const result = await this.categoryService.remove(+id)

		if (!result)
			throw new NotFoundException(
				'There is no category with the following id: ' + id,
			)
      
		return result
	}
}
