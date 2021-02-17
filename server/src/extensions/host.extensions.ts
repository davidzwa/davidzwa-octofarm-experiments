import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { INestApplication } from "@nestjs/common";

export function AddSwagger(app: INestApplication): INestApplication {
    const config = new DocumentBuilder()
        .setTitle("OctoFarm2 API docs")
        .setDescription("OctoFarm public API description")
        .setVersion(process.env.npm_package_version)
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("api", app, document);

    return app;
}