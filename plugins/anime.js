const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const fs = require('fs');
const axios = require('axios')
let { img2url } = require('@blackamda/telegram-image-url');
var imgmsg = "*Give me a anime name !*"
var descgs = "It gives details of given anime name."
var cants = "I cant find this anime."

cmd({
    pattern: "anime",
    alias: ["animesearch","sanime"],
    react: "⛩️",
    desc: descgs,
    category: "anime",
    use: '.anime <query>',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let wm = `© 𝖰𝗎𝖾𝖾𝗇 𝗄𝖾𝗇𝗓𝗂 𝗆𝖽 v${require("../package.json").version} (Test)\nsɪᴍᴘʟᴇ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴅᴀɴᴜxᴢᴢ 🅥`
if (!q) return reply(imgmsg)
let anu = await fetchJson(`https://api.jikan.moe/v4/anime?q=${q}`)

var sections = []
        anu.data.map((v) => {
          sections.push({
            rows: [{
              title: `${v.title}`,
              id: `${prefix}animeeg ${v.mal_id}`
            }]
          })
        })
    
let msg = `┌───[😼ＫＥＮＺＩ-ＭＤ🤍]

   *ANIME SEARCH*
   
*Search Results From* ${q}`
    
        const buttons = [{
          name: 'single_select',
          buttonParamsJson: JSON.stringify({
            title: 'Tap Here!',
            sections
          })
        }]
        
        let message = {
            imge: `https://cdn.1min30.com/wp-content/uploads/2019/01/symbole-XVid%C3%A9os.jpg`,
            header: '',
            footer: wm,
            body: msg
        }
return conn.sendButtonMessage(from, buttons, m, message) 
    
} catch (e) {
  reply(cants)
  l(e)
}})


cmd({
    pattern: "animeeg",
    dontAddCommandList: true,
    filename: __filename
  },
  async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
  try{
  await conn.sendMessage(from, { react: { text: '🔃', key: mek.key }})
  res = await fetchJson(`https://api.jikan.moe/v4/anime/${q}`)
  let txt = `*TITLE:* *${res.data.title}*\n*ENGLISH:* *${res.data.title_english}*\n*JAPANESE:* *${res.data.title_japanese}*\n*TYPE ANIME:* *${res.data.type}*\n*ADAPTER:* *${res.data.source}*\n*TOTAL EPISODE:* *${res.data.episodes}*\n*STATUS:* *${res.data.status}*\n*ONGOING:* *${res.data.airing ? 'Ya' : 'DRIS'}*\n*AIRED:* *${res.data.aired.string}*\n*DURATION:* *${res.data.duration}*\n*RATING:* *${res.data.rating}*\n*SCORE:* *${res.data.score}*\n*RANK:* *${res.data.rank}*\n*STUDIO:* *${res.data.studios[0].name}* `
  conn.sendMessage(from, { image : { url : res.data.images.jpg.image_url}, caption : txt}, {quoted :mek }).catch((err) => reply(''))
  await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
  } catch (e) {
  reply(cants)
  l(e)
  }
  })
  
//====================================================================================
cmd({
    pattern: "loli",
    alias: ["imgloli"],
    react: '🧧',
    desc: "Download anime loli images.",
    category: "anime",
    use: '.loli',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let res = await axios.get('https://api.lolicon.app/setu/v2?num=1&r18=0&tag=lolicon')
let wm = `🧧 Random loli image

© 𝖰𝗎𝖾𝖾𝗇 𝗄𝖾𝗇𝗓𝗂 𝗆𝖽 v${require("../package.json").version} (Test)\nsɪᴍᴘʟᴇ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴅᴀɴᴜxᴢᴢ 🅥`
await conn.sendMessage(from, { image: { url: res.data.data[0].urls.original }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
})

//=====================================================================
cmd({
    pattern: "waifu",
    alias: ["imgwaifu"],
    react: '🧧',
    desc: "Download anime waifu images.",
    category: "anime",
    use: '.waifu',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let res = await axios.get('https://api.waifu.pics/sfw/waifu')
let wm = `🧧 Random Waifu image

© 𝖰𝗎𝖾𝖾𝗇 𝗄𝖾𝗇𝗓𝗂 𝗆𝖽 v${require("../package.json").version} (Test)\nsɪᴍᴘʟᴇ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴅᴀɴᴜxᴢᴢ 🅥`
await conn.sendMessage(from, { image: { url: res.data.url }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
})

//================================================================
cmd({
    pattern: "neko",
    alias: ["imgneko"],
    react: '💫',
    desc: "Download anime neko images.",
    category: "anime",
    use: '.neko',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let res = await axios.get('https://api.waifu.pics/sfw/neko')
let wm = `🧧 Random neko image

© 𝖰𝗎𝖾𝖾𝗇 𝗄𝖾𝗇𝗓𝗂 𝗆𝖽 v${require("../package.json").version} (Test)\nsɪᴍᴘʟᴇ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴅᴀɴᴜxᴢᴢ 🅥`
await conn.sendMessage(from, { image: { url: res.data.url  }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
})
  
//=====================================================================
cmd({
    pattern: "megumin",
    alias: ["imgmegumin"],
    react: '🧧',
    desc: "Download anime megumin images.",
    category: "anime",
    use: '.megumin',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let res = await axios.get('https://api.waifu.pics/sfw/megumin')
let wm = `🧧 Random megumin image

© 𝖰𝗎𝖾𝖾𝗇 𝗄𝖾𝗇𝗓𝗂 𝗆𝖽 v${require("../package.json").version} (Test)\nsɪᴍᴘʟᴇ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴅᴀɴᴜxᴢᴢ 🅥`
await conn.sendMessage(from, { image: { url: res.data.url }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
})

//================================================================
cmd({
    pattern: "maid",
    alias: ["imgmaid"],
    react: '💫',
    desc: "Download anime maid images.",
    category: "anime",
    use: '.maid',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let res = await axios.get('https://api.waifu.im/search/?included_tags=maid')
let wm = `🧧 Random maid image

© 𝖰𝗎𝖾𝖾𝗇 𝗄𝖾𝗇𝗓𝗂 𝗆𝖽 v${require("../package.json").version} (Test)\nsɪᴍᴘʟᴇ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴅᴀɴᴜxᴢᴢ 🅥`
await conn.sendMessage(from, { image: { url: res.data.images[0].url  }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
})

//=====================================================================
cmd({
    pattern: "awoo",
    alias: ["imgawoo"],
    react: '🧧',
    desc: "Download anime awoo images.",
    category: "anime",
    use: '.awoo',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let res = await axios.get('https://api.waifu.pics/sfw/awoo')
let wm = `🧧 Random awoo image

© 𝖰𝗎𝖾𝖾𝗇 𝗄𝖾𝗇𝗓𝗂 𝗆𝖽 v${require("../package.json").version} (Test)\nsɪᴍᴘʟᴇ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴅᴀɴᴜxᴢᴢ 🅥`
await conn.sendMessage(from, { image: { url: res.data.url }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
})