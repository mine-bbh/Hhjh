const {cmd , commands} = require('../command')
const { Buffer } = require('buffer');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')

//=========News======
cmd({
    pattern: "derana",
    alias: ["tvderana","derananews"],
    react: "📡",
    desc: "It gives derana news.",
    category: "search",
    use: '.derana',
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const data = await fetchJson('https://ada-derana-news-pink-venom.vercel.app')
let info = `*📃 Title :* ${data.title}
*⛓️ Link:* ${data.new_url}
*📅 Time :* ${data.time}
*📚 Description:* ${data.description}

> *°⏰ [  𝗕𝗬  © Ｄａｒｋ < | | > Ｎｅｏｎ Ｃｙｂｅｒｚ ヤ • 🎉 ]*
`
return await conn.sendMessage(from, { image: { url: data.image} , caption: info } , { quoted: mek })
} catch (e) {
console.log(e)
}
})

//=================================================================================================================

cmd({
    pattern: "hiru",
    alias: ["hnews","hirunews"],
    react: "🍎",
    desc: "It gives hiru news.",
    category: "search",
    use: '.hnews',
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const data = await fetchJson('https://app-97e3fc0d-9aec-4ff1-a518-b7b72a127d7c.cleverapps.io/api/latest')
let info = `*📃 Title :* ${data.title}
*🕒 Time:* ${data.time} 
*⛓️ Id:* ${data.id}
*📚 Description:* ${data.desc}

> *°⏰ [  𝗕𝗬  © Ｄａｒｋ < | | > Ｎｅｏｎ Ｃｙｂｅｒｚ ヤ • 🎉 ]*
`
return await conn.sendMessage(from, { image: { url: data.image} , caption: info } , { quoted: mek })
} catch (e) {
l(e)
}
})
