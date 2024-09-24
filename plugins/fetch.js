const axios = require('axios');
const mime = require('mime-types');  // Make sure to install mime-types package
const { cmd } = require('../command');
const config = require('../config');

cmd({
    pattern: "fetch",
    react: "🎞️",
    dontAddCommandList: true,
    filename: __filename
}, async (conn, mek, m, { from, q, reply }) => {
    if (!q) {
        return await reply('*Please provide a direct URL!*');
    }

    try {
        const mediaUrl = q.trim();

        const response = await axios.get(mediaUrl, { responseType: 'arraybuffer' });
        const mediaBuffer = Buffer.from(response.data, 'binary');
        const mimeType = response.headers['content-type'] || 'application/octet-stream';
        
        const fileExtension = mime.extension(mimeType);

        const fileName = `file.${fileExtension}`;

        const message = {
            document: mediaBuffer,
            mimetype: mimeType,
            fileName: fileName,
        };
        await conn.sendMessage(from, message, { quoted: mek });

        await conn.sendMessage(from, { react: { text: '✅', key: mek.key } });
    } catch (error) {
        console.error('Error fetching or sending', error);
        await conn.sendMessage(from, '*Error fetching or sending *', { quoted: mek });
    }
});
