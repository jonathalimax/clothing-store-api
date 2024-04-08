import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Users } from './entities/users.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
    constructor(@InjectRepository(Users) private repository: Repository<Users>) {}

    async getAll() {
        return await this.repository.find()
    }

    async create(name: string, email: string) {
        const user = this.repository.create({ name, email })
        return await this.repository.save(user)
    }
}
