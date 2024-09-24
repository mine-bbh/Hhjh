const config = require('../config')
const { cmd, commands } = require('../command')
const axios = require('axios')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')

var desct = "It convert given text to ai image."
var imgmsg = "*Example: .photoleap woman,hair cut collor red,full body,bokeh*"
var cantf = "*Server is busy. Try again later.!*"
let wm = `© 𝖰𝗎𝖾𝖾𝗇 𝗄𝖾𝗇𝗓𝗂 𝗆𝖽 v${require("../package.json").version} (Test)\nsɪᴍᴘʟᴇ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴅᴀɴᴜxᴢᴢ 🅥`

async function textToImage(text) {
  try {
    const {
      data
    } = await axios.get("https://tti.photoleapapp.com/api/v1/generate?prompt=" + text);
    return data;
  } catch (err) {
    return null;
  }
}

cmd({
    pattern: "photoleap",
    alias: ["plai"],
    react: '🤖',
    desc: desct,
    dontAddCommandList: true,
    use: '.imagine  woman,hair cut collor red,full body,bokeh',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(imgmsg)
let data = await textToImage(q)
await conn.sendMessage(from, { image: { url: await data.result_url }, caption: wm }, { quoted: mek })
} catch (e) {
reply(cantf)
console.log(e)
}
})
