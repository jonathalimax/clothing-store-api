import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateColorDto } from 'src/product/dto/color/create-color.dto';
import { Color } from 'src/color/entities/color.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ColorService {
    constructor(@InjectRepository(Color) private repository: Repository<Color>) {}

    async findAll(): Promise<Color[]> {
        return await this.repository.find()
    }

    async create(createColorDto: CreateColorDto) {
        const color = this.repository.create(createColorDto)
        return await this.repository.save(color)
    }
}
