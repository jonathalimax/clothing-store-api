import { Body, Controller, Get, Post } from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dtos/create-user.dto'

@Controller('user')
export class UserController {
	constructor(private userService: UserService) {}

	@Get()
	async getAll() {
		await this.userService.getAll()
	}

    @Post()
    async create(@Body() body: CreateUserDto) {
        console.log(body)
        await this.userService.create(body.name, body.email)
    }
}
