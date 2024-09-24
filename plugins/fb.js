const config = require('../config');
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const getFBInfo = require("@xaviabot/fb-downloader")

var needus = "🚩*Please give me facebook url !!*" 
var cantf = "🚩 *I cant find this video!*" 
cmd({
    pattern: "fb2",
    alias: ["facebook2"],
    react: '💫',
    desc: "Download facebook videos.",
    category: "download",
    use: '.fb <facebook url>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await  reply(needus)
let response = await fetchJson('https://fbdlayodya-api.vercel.app/api/downloads/facebook?url='+q)
const buff = response.result.video_hd || response.result.video_sd
let wm = `© 𝖰𝗎𝖾𝖾𝗇 𝗄𝖾𝗇𝗓𝗂 𝗆𝖽 v${require("../package.json").version} (Test)\nsɪᴍᴘʟᴇ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴅᴀɴᴜxᴢᴢ 🅥`
await conn.sendMessage(from, { video: { url: buff }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cantf)
console.log(e)
}
})

