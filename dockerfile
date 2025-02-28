# Usa uma imagem oficial do Node.js
FROM node:20-slim

# Instala dependências do Chromium
RUN apt-get update && apt-get install -y \
    chromium \
    chromium-driver \
    && rm -rf /var/lib/apt/lists/*

# Define a variável de ambiente para o Puppeteer encontrar o Chromium
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos do bot para dentro do container
COPY package.json package-lock.json ./
RUN npm install

COPY . .

# Inicia o bot
CMD ["node", "index.js"]
