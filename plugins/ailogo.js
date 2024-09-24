const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const axios = require('axios');
const cheerio = require('cheerio');
let wm = `© 𝖰𝗎𝖾𝖾𝗇 𝗄𝖾𝗇𝗓𝗂 𝗆𝖽 v${require("../package.json").version} (Test)\nsɪᴍᴘʟᴇ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴅᴀɴᴜxᴢᴢ 🅥`

class AdobeFirefly {
    constructor(options = {}) {
        this.options = options
    }
 
    generate = prompt => new Promise(async resolve => {
        try {
            const json = await (await axios.post('https://firefly.adobe.io/v2/images/generate', {
                prompt, "size": {
                    "width": 2048, "height": 2048
                }, "visualIntensity": 6, "locale": "en-ID", "seeds": [61438, 95119, 42010, 42205]}, {
                headers: {
                    ...this.options
                }
            })).data
            if (!json.outputs || json.outputs.length < 1) return ({
                status: false,
                msg: `Can't generate image!`
            })
            resolve({
                status: true,
                data: json.outputs
            })
        } catch (e) {
            resolve({
                status: false,
                msg: e.message
            })
        }
    })
}

cmd({
    pattern: "ailogo",
    alias: ["logoai","ail","gptlogo"],
    react: '🤖',
    category: "ai",
    desc: "It creates ai logos.",
    use: '.ailogo <query>',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please enter a query")
const Adobe = new AdobeFirefly
let result = await Adobe(q)
conn.sendMessage(from, { image: { url: result.data }, caption: wm }, { quoted: mek })
} catch (e) {
reply("I cant create that logo")
console.log(e)
}
})
