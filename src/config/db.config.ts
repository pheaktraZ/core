import * as path from 'path';
import { DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config();
const dbConfig: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [path.resolve(__dirname, '../**/*.entity{.ts,.js}')],
    migrations: [path.resolve(__dirname, '../../src/database/migrations/**/*{.ts,.js}')],
    migrationsTableName: 'migrations',
    synchronize: false,
};

export default dbConfig;
