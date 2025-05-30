import http from "http";
import { Server as SocketIOServer } from "socket.io";
import { configDotenv } from "dotenv";
import app from "./app";
import connection from "./Config/db";
import { setupSocket } from "./Sockets";

configDotenv();
const server = http.createServer(app);
const io = new SocketIOServer(server, {
  cors: {
    origin: "*",
  },
});
setupSocket(io);
const PORT = process.env.PORT || 9890;

server.listen(PORT, async () => {
  connection();
  console.log(`Server is running on port ${PORT}`);
});
