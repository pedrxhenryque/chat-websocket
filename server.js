const WebSocket = require("ws");

const server = new WebSocket.Server({ port: 8080 });

console.log("Servidor WebSocket rodando na porta 8080...");

server.on("connection", (socket) => {
  console.log("Novo cliente conectado!");

  // Avisar que alguém entrou
  server.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send("🔵 Um usuário entrou no chat");
    }
  });

  // Quando receber mensagem
  socket.on("message", (message) => {
    console.log("Mensagem recebida:", message.toString());

    // Enviar para todos os clientes conectados
    server.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message.toString());
      }
    });
  });

  // Quando desconectar
  socket.on("close", () => {
    console.log("Cliente desconectado.");

    server.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send("🔴 Um usuário saiu do chat");
      }
    });
  });
});
