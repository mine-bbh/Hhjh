const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? '' : process.env.SESSION_ID,
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? 'false' : process.env.ONLY_GROUP,
ONLY_ME: process.env.ONLY_ME === undefined ? 'false' : process.env.ONLY_ME,
STATUS_VIEW: process.env.STATUS_VIEW === undefined ? 'true' : process.env.STATUS_VIEW,
ALWAYS_ONLINE: process.env.ADDRESSES === undefined ? 'true' : process.env.ADDRESSES,
AUTO_TYPING: process.env.AUTO_TYPING === undefined ? 'true' : process.env.AUTO_TYPING,
AUTO_RECORDING: process.env.AUTO_RECORDING === undefined ? 'false' : process.env.AUTO_RECORDING,
ALIVE: process.env.ALIVE === undefined ? `Hello im alive now !!` : process.env.ALIVE,
OWNER: process.env.OWNER === undefined ? `94774500937` : process.env.OWNER,
FOOTER: process.env.FOOTER=== undefined ? '😼ＫＥＮＺＩ-ＭＤ.🤍': process.env.FOOTER,
MAX_SIZE: process.env.MAX_SIZE === undefined ? '1500': process.env.MAX_SIZE,
LOGO: process.env.LOGO === undefined ? `https://images.app.goo.gl/oW8eT4d7gLdJsDJj9` : process.env.LOGO,
ANTI_DELETE : process.env.ANTI_DELETE === undefined ? 'true' : process.env.ANTI_DELETE,
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '94774500937' : process.env.DELETEMSGSENDTO
}
