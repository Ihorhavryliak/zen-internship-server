import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from "@nestjs/websockets";
import { Server } from "socket.io";
@WebSocketGateway({
  namespace: "events",
  cors: {
    credentials: true,
    methods: ["GET", "POST"],
    origin: [/* `${process.env.FRONT_URL_SITE}` */'https://zen-intership-web.onrender.com/'],
  },
})
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage("message")
  handleMessage(client: any, payload: any): string {
    return "Hello world!";
  }
  sendMessage(message: any) {
    //socket emit
    this.server.emit("newMessage", message);
  }
}
