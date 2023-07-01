import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // this will remove any properties that are not in the DTO, but will not throw an error
      forbidNonWhitelisted: true, // this will throw an error and block api call if there are properties that are not in the DTO
      transform: true, // this will transform the data types (number, string etc... ) of incoming data to the DTO type
    }),
  );
  await app.listen(3000);
}
bootstrap();
