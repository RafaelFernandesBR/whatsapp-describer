const fs = require('fs');
const { processImage } = require('./uploadService');

async function processImageFromPath(imagePath) {
    try {
        const base64Image = convertImageToBase64(imagePath);
        const recognitionText = await processImage(base64Image);

        if (recognitionText) {
            console.log("Texto reconhecido:", recognitionText);
            return recognitionText;
        }
    } catch (error) {
        console.error("Erro ao processar a imagem:", error.message);
    }
    return null;
}

function convertImageToBase64(imagePath) {
    const imageBuffer = fs.readFileSync(imagePath);
    return imageBuffer.toString('base64');
}

module.exports = { processImageFromPath };
