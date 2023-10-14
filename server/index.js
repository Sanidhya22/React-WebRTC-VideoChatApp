const { Server } = require("socket.io");
const io = new Server(8000);

io.on("connection", (Socket) => {
  console.log("Socket Connected", socket.id);
});
