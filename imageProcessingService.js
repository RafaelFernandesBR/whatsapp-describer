const { processImage } = require('./uploadService');

async function processImageFromPath(base64Image) {
    try {
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

module.exports = { processImageFromPath };
