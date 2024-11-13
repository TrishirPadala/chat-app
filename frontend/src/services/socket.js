export const socket = io("https://your-backend-url.com");

export function sendMessage(message) {
  socket.emit("sendMessage", message);
}

export function onMessage(callback) {
  socket.on("receiveMessage", callback);
}
