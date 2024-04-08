import { Injectable, NotFoundException } from '@nestjs/common'
import { Size } from './entities/size.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateSizeDto } from './dtos/create-size.dto'

@Injectable()
export class SizeService {
	constructor(@InjectRepository(Size) private repository: Repository<Size>) {}

	async findAll(): Promise<Size[]> {
		return await this.repository.find()
	}

	async create(createSizeDto: CreateSizeDto) {
		const size = this.repository.create(createSizeDto)
		return this.repository.save(size)
	}
}
