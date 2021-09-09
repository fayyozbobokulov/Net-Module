import net from "net";
import colors from "colors";

const server = net.createServer();

server.on("connection", (socket) => {
  const remoteAddress = socket.remoteAddress + ":" + socket.remotePort;
  console.log(`new client connection is made ${remoteAddress}`);
  
  socket.on("data", (data) => {
    console.log(`Data received from client ${remoteAddress} is: ${data}`);
  })
  socket.write(`hello from server ${remoteAddress}`);
  
  socket.on("close", () => {
    console.log("connection from server is closed", remoteAddress);
  })

  socket.on("error", (error) => {
    console.log(`Connection error: ${error.message} remoteAddress ${remoteAddress}`);
  })
});

server.on("error", (error) => {
  console.log(`server error: ${error.message}`);

})
server.listen(9000, () => {
  console.log(`Server listening on port ${JSON.stringify(server.address())}`);
})

