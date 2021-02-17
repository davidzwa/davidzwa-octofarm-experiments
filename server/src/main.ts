import { NestFactory } from "@nestjs/core";
import { AddSwagger } from "./extensions/host.extensions";
import { AppModule } from "./app.module";
import { INestApplication, Logger } from "@nestjs/common";
import { D, Y } from "./utils/logging.util";

function printPreBootMessage(logger: Logger) {
    logger.log(`OctoFarm2 ${Y}v${process.env.npm_package_version}${D}`);
    logger.log(`NodeJS ${Y}${process.version}${D}`);
    const startDate = new Date().toDateString();
    const startTime = new Date().toLocaleTimeString();
    const startMoment = `at ${Y}${startTime}${D} on ${Y}${startDate}${D}`;
    logger.log(`Booted ${startMoment}!`, );

}

async function printPostBootMessage(logger: Logger, app: INestApplication) {
    logger.warn(`Server is listening on ${await app.getUrl()}`);
    logger.warn(`${Y}%s${D}`, "Happy printing!");
}

async function bootstrap() {
    const logger = new Logger("Main");
    printPreBootMessage(logger);

    const app = await NestFactory.create(AppModule, {
        logger: ["error", "warn", "log"]
    });
    AddSwagger(app);
    await app.listen(3000, "127.0.0.1", () => {
        printPostBootMessage(logger, app);
    });
}

bootstrap();
