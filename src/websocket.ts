import { io } from "socket.io-client";

export const websocket = io("", {
  path: "/socket.io",
  transports: ["websocket"],
});
