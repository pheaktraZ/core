import { ConfigService } from "@nestjs/config";
import { DataSource } from "typeorm";
import configuration from "./config/configuration";
import { join } from 'path';

const configService = new ConfigService(configuration)


export const postgresDataSource = new DataSource({
    type: configService.get('database.type') as 'postgres', 
    host: configService.get('database.host') as string,
    port: Number(configService.get('database.port')) || 5432, 
    username: configService.get('database.username') as string,
    password: configService.get('database.password') as string,
    database: configService.get('database.name') as string,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    migrations:[join(__dirname, '/../../', 'database/migrations/**/*{.ts,.js}')],
    migrationsTableName:'migrations',
    synchronize: false,
});