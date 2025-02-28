# whatsapp-describer
Um bot que descreve imagens no whatsapp.

## uso
Para usar o bot, basta enviar uma imagen para o bot. seja encaminhando ou diretamente ao contado que foi definido.

Atualmente a única função do bot é essa.

## Executando o bot

Para executar o bot, fassa o seguinte:

1. Instale o node JS.
2. Na pasta desse projeto, instale as dependèncias com o comando `npm install`
3. Execute com o comando `node index.js`
4. espere o código QR aparecer na tela, e leia ele no seu celular.

## Executando com docker

Para executar com docker, basta executar o comando `docker compose up -d`

Depois de montar a imagem, execute `docker compose logs` para obter o códgo QR no terminal.
é importante limpar o terminal antes de obter o código, para que seja mais simples de ler ele na tela.

Linux:

`clear`

Windows:

`cls`
