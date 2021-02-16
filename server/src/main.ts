import { NestFactory } from "@nestjs/core";
import { AddSwagger } from "./host/extensions/host.extensions";
import { AppModule } from "./app.module";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    AddSwagger(app);
    await app.listen(3000);
}

bootstrap();
