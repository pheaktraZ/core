import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppDataSource } from './config/data-source'
async function bootstrap() {
  try {
    await AppDataSource.initialize();
    console.log('Data Source has been initialized!');
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
  } catch (err) {
    console.error('Error during Data Source initialization', err);
  }
}
bootstrap();
