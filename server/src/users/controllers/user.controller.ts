import { Controller, Get, Post } from "@nestjs/common";
import { UserService } from "../services/user.service";
import { User } from "../domain/user.entity";
import { ApiTags } from "@nestjs/swagger";

@Controller("user")
@ApiTags(UserController.name)
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @Get()
    async getUsers(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Post()
    async createUser(): Promise<void> {
        return this.userService.create();
    }
}
