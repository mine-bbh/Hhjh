const config = require('../config')
const { igdl } = require('@ruhend/scraper')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
var needus = "🚩*Please give me instagram url !!*" 
var cantf = "🚩 *I cant find this video!*" 
cmd({
    pattern: "ig",
    alias: ["insta"],
    react: '💫',
    desc: "Download Instagram videos",
    category: "download",
    use: '.ig <insta link>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await  reply(needus)
let wm = `© 𝖰𝗎𝖾𝖾𝗇 𝗄𝖾𝗇𝗓𝗂 𝗆𝖽 v${require("../package.json").version} (Test)\nsɪᴍᴘʟᴇ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴅᴀɴᴜxᴢᴢ 🅥`
let res = await igdl(q)
//let data = await res.data
for (let media of res.data) {
await conn.sendMessage(from, { video: { url: media.url }, caption: wm}, { quoted: mek })
//conn.sendFileUrl(from, media.url, wm, mek )
}
} catch (e) {
let wm = `© 𝖰𝗎𝖾𝖾𝗇 𝗄𝖾𝗇𝗓𝗂 𝗆𝖽 v${require("../package.json").version} (Test)\nsɪᴍᴘʟᴇ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴅᴀɴᴜxᴢᴢ 🅥`
let res = await igdl(q)
//let data = await res.data
for (let media of res.data) {
await conn.sendMessage(from, { image: { url: media.url }, caption: wm}, { quoted: mek })
//conn.sendFileUrl(from, media.url, wm, mek )
}
console.log(e)
} 
}
)
