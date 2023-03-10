import { EventsGateway } from "./events/events.gateway";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder } from "@nestjs/swagger";
import { SwaggerModule } from "@nestjs/swagger/dist";
import { AppModule } from "./app.module";

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors({
    origin: [process.env.FRONT_URL_SITE],
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    credentials: true,
  });
  //socket
  const eventsGateway = app.get(EventsGateway);

  setInterval(() => eventsGateway.sendMessage, 2000);

  const config = new DocumentBuilder()
    .setTitle("Message APP")
    .setDescription("Documentation REST API")
    .setTitle("Message APP")
    .addTag("Message APP")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/api/docs", app, document);

  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}

start();
