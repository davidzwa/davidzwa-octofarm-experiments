import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app/app.controller";
import { AppService } from "./app/app.service";
import { ConfigModule } from "@nestjs/config";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: [".env", ".env.development.local", ".env.development"]
        }),
        TypeOrmModule.forRoot({
            authSource: "admin",
            readPreference: "primary",
            ssl: false
        })
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {
}
