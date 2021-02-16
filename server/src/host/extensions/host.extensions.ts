import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { INestApplication } from "@nestjs/common";

export function AddSwagger(app: INestApplication): INestApplication {
  const config = new DocumentBuilder()
    .setTitle("OctoFarm API docs")
    .setDescription("OctoFarm public API description")
    .setVersion("1.0")
    .addTag("Get started")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  return app;
}
