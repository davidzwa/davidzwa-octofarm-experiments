import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { AddSwagger } from "./host/extensions/host.extensions";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  AddSwagger(app);
  await app.listen(3000);
}

bootstrap();
