import { Controller, Get } from "@nestjs/common";
import { AppService } from "../services/app.service";
import { ApiTags } from "@nestjs/swagger";

@Controller("printer")
@ApiTags(PrinterController.name)
export class PrinterController {
    constructor(private readonly appService: AppService) {
    }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }
}
