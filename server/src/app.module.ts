import { TypeOrmModule } from "@nestjs/typeorm";
import { PrinterController } from "./printers/controllers/printer.controller";
import { AppService } from "./printers/services/app.service";
import { ConfigModule } from "@nestjs/config";
import { UserModule } from "./users/user.module";
import { Module } from "@nestjs/common";
import { AuthModule } from './auth/auth.module';


@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: [".env", ".env.development", ".env.production"]
        }),
        // https://docs.nestjs.com/techniques/configuration#using-the-configservice
        // https://github.com/typeorm/typeorm/blob/master/docs/using-ormconfig.md#which-configuration-file-is-used-by-typeorm
        TypeOrmModule.forRoot(),
        UserModule,
        AuthModule
    ],
    controllers: [PrinterController],
    providers: [AppService]
})
export class AppModule {
}
