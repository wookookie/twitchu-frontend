import { io } from "socket.io-client";

const URL = `ws://${window.location.hostname}:8080`;

export const websocket = io(URL, {
  path: "/socket.io",
  transports: ["websocket"],
});
