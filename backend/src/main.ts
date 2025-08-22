import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';
import { ValidationExceptionFilter } from './common/filters/validation-exception.filter';
import { BadRequestException } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      exceptionFactory: (errors) => {
        const formattedErrors: Record<string, string> = {};
        errors.forEach((err) => {
          if (err.constraints) {
            formattedErrors[err.property] = Object.values(err.constraints)[0];
          }
        });
        // ✅ Wrap in BadRequestException
        return new BadRequestException(formattedErrors);
      },
    }),
  );

  // app.useGlobalFilters(new ValidationExceptionFilter());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
