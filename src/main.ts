import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function strap() {
  try {
    const PORT = process.env.PORT ?? 3030
    const app = await NestFactory.create(AppModule);


    app.useGlobalPipes(new ValidationPipe());

    const config = new DocumentBuilder()
    .setTitle("Donation Site")
    .setDescription("NestJS RESTFULL API")
    .setVersion("1.0")
    .addTag("admin, category, create-social, donation, auth")
    .build()

    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup("/api/docs", app, document)
  await app.listen(PORT, ()=> {
    console.log(`Server started at: http:localhost:${PORT}`)
  });
  } catch (error) {
    console.log(error)
  }
}
strap();
