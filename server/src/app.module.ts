import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app/app.controller";
import { AppService } from "./app/app.service";
import { ConfigModule } from "@nestjs/config";
import { UserModule } from "./users/user.module";
import { Module } from "@nestjs/common";


@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: [".env", ".env.development", ".env.production"]
        }),
        // https://docs.nestjs.com/techniques/configuration#using-the-configservice
        // https://github.com/typeorm/typeorm/blob/master/docs/using-ormconfig.md#which-configuration-file-is-used-by-typeorm
        TypeOrmModule.forRoot(),
        UserModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {
}
