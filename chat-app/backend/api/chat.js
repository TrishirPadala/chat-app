const { Server } = require("socket.io");

module.exports = (req, res) => {
  if (req.method === 'GET') {
    res.status(200).send("Socket.IO server is ready");
  } else if (req.method === 'POST') {
    // Setup a new Socket.IO server
    const io = new Server(res.socket.server);

    io.on("connection", (socket) => {
      console.log("A user connected");

      socket.on("sendMessage", (message) => {
        console.log("Received message:", message);
        io.emit("receiveMessage", message);  // Broadcast to all clients
      });

      socket.on("disconnect", () => {
        console.log("User disconnected");
      });
    });

    res.socket.server.io = io; // Make sure to attach it to the socket server
    res.status(200).end(); // Respond to Vercel, ending the function
  }
};
