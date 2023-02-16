import { NestFactory } from "@nestjs/core";
import { DocumentBuilder } from "@nestjs/swagger";
import { SwaggerModule } from "@nestjs/swagger/dist";
import { AppModule } from "./app.module";

async function start() {
  const PORT = process.env.PORT || 4000;
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors({
    origin: [process.env.FRONT_URL_SITE],
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle("New app")
    .setDescription("Documentation REST API")
    .setTitle("My test app")
    .addTag("New App")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/api/docs", app, document);

  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}

start();
