const { Client, LocalAuth } = require('whatsapp-web.js');
const { processImageFromPath } = require('./imageProcessingService');
const qrcode = require('qrcode-terminal');
const fs = require('fs');

const client = new Client({
    puppeteer: {
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    },
    authStrategy: new LocalAuth({
        dataPath: './login'
    })
});

client.on('qr', qr => {
    console.log('Escaneie o QR Code abaixo para logar no WhatsApp:');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Bot está pronto!');
});

client.on('message', async msg => {
    if (msg.hasMedia) {
        const media = await msg.downloadMedia();

        if (media.mimetype.startsWith('image/')) {
            const recognitionText = await processImageFromPath(media.data);

            if (recognitionText) {
                msg.reply(recognitionText);
            } else {
                msg.reply("Não foi possível reconhecer o conteúdo da imagem.");
            }
        }
    } else if (msg.body === '!ping') {
        msg.reply('pong');
    }
});

client.initialize();
