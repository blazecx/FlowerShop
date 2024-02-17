import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // http://localhost:3001/api/{page}
  app.setGlobalPrefix('api');
  // Полезная функция которое не мешает жить нормально
  app.enableCors()
  await app.listen(3001);
}
bootstrap();
