// Import Third-Party Modules
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

// Import User-Defined Modules
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /**
   * Defining a configuration for swagger documentation.
   * This Document Builder class instance creates a
   * base document that matches OpenAPI Specification.
   */
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Test RESTAPI Endpoints')
    .setBasePath('v1')
    .setDescription(
      'This swagger API Documentation is an example of REST API Endpoints with NESTJS',
    )
    .setVersion('1.0')
    .addBearerAuth(
      { type: 'http', bearerFormat: 'Token', scheme: 'bearer' },
      'bearerToken',
    )
    .build();

  /**
   * Defining a complete swagger documentation for our REST API Endpoints,
   * SwaggerModule.createDocument accepts two arguments:
   * a) server application instance
   * b) configuration object for Swagger API
   */
  const completeSwaggerDocumentation = SwaggerModule.createDocument(
    app,
    swaggerConfig,
  );

  /**
   * Here, we are calling the setup method of swaggerModule.
   * It takes 3 arguments:
   * a) Swagger API Documenation Route Path
   * b) Nest Server application instance
   * c) Complete Swagger Documentation
   */
  SwaggerModule.setup('api', app, completeSwaggerDocumentation);
  await app.listen(3000);
}
bootstrap();
