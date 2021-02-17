import { Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { LocalAuthGuard } from "../guards/local-auth.guard";
import { AuthService } from "../services/auth.service";
import { JwtAuthGuard } from "../guards/jwt-auth.guard";

// Comment
@Controller()
@ApiTags(AuthController.name)
export class AuthController {

    constructor(private authService: AuthService) {
    }

    @UseGuards(LocalAuthGuard)
    @Post("auth/login")
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get("profile")
    getProfile(@Request() req) {
        return req.user;
    }
}