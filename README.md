💬 Chat WebSocket Simples

Projeto de chat em tempo real utilizando Node.js e WebSocket, desenvolvido para a disciplina de Redes.

📦 Requisitos

Node.js instalado

npm

🚀 Como executar o projeto

1. Clonar o repositório
   git clone https://github.com/SEU_USUARIO/chat-websocket.git
   cd chat-websocket
2. Instalar dependências
   npm install
3. Iniciar o servidor WebSocket
   node server.js

O servidor iniciará na porta 8080.

4. Iniciar o servidor HTTP

Em outro terminal execute:

npx http-server -p 3000 5. Acessar o chat

Abra no navegador:

http://localhost:3000

Para testar o chat, abra duas abas do navegador ou dois dispositivos na mesma rede.

🌐 Funcionamento

O navegador carrega a interface via HTTP.

Após carregar, o cliente cria uma conexão WebSocket com o servidor.

As mensagens enviadas por um cliente são retransmitidas pelo servidor para todos os clientes conectados.

Isso permite comunicação em tempo real sem recarregar a página.
