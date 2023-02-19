import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from "@nestjs/websockets";
import { Server } from "socket.io";
@WebSocketGateway({
  namespace: "events",
  cors: {
    origin: (origin, callback) => {
      // Check if the origin is allowed
      const allowedOrigins = [`${process.env.FRONT_URL_SITE}`];
      if (!allowedOrigins.includes(origin)) {
        return callback(new Error("Origin not allowed"), false);
      }
      // Return the allowed origin
      return callback(null, true);
    },
  },
  credentials: true,
  methods: ["GET", "POST"],
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
