import { Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./user.entity";

@Controller("user")
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
