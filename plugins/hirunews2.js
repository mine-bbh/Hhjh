const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
cmd({
    pattern: "hiru2",
    alias: ["hnews2","hirunews2"],
    react: "🗞️",
    desc: "It gives hiru news.",
    category: "search",
    use: '.hnews',
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const res = await fetchJson('https://vajira-api-site-65bfe70906e4.herokuapp.com/details/hirunews')
let data = res.data
let info = `*📃 Title :* ${data.title}

*📚 Description:* ${data.desc}


${data.link}
`
return await conn.sendMessage(from, { image: { url: data.img} , caption: info } , { quoted: mek })
} catch (e) {
l(e)
}
})
