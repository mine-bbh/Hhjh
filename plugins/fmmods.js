const config = require('../config')
const { cmd, commands } = require('../command')
const { mods } = require('fouadwa-scraper')

var N_FOUND = "*I couldn't find anything :(*"

cmd({
    pattern: "fouadwa",
    alias: ["wamod"],
    react: '🍟',
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, prefix, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try {
    let getmod = await mods()
    const com_whatsapp = getmod.com_whatsapp.name
    const com_fmwhatsapp = getmod.com_fmwhatsapp.name
    const com_gbwhatsapp = getmod.com_gbwhatsapp.name
    const com_yowhatsapp = getmod. com_yowhatsapp.name
	
const cap = `⎧ 😼ＫＥＮＺＩ-ＭＤ🤍⎭
      
*Foud Whatsapp Mod Downloader*
`	
const sections = [
    {
	title: "",
	rows: [
	    {title: "1", rowId: prefix + 'wmod ' , description: com_whatsapp +'📦'},
	    {title: "2", rowId: prefix + 'fmod ' , description: com_fmwhatsapp +'📦'} ,
	    {title: "3", rowId: prefix + 'gmod ' , description: com_gbwhatsapp +'📦'} ,
	    {title: "3", rowId: prefix + 'ymod ' , description: com_yowhatsapp +'📦'} ,


	]
    } 
]
let img = 'https://i.postimg.cc/3RDjM2HN/p-1932n22t12.jpg'
const listMessage = {
  image: { url:img },
  caption: cap,
  footer: config.FOOTER,
  buttonText: "🔢 Reply below number,",
  sections,
  contextInfo: {
				
				externalAdReply: { 
					title: 'ＭＯＤ ＷＨＡＴＳＡＰＰ ＤＬ',
					body: '◦ ᴇᴀsʏ ᴛᴏ ᴜsᴇ',
					mediaType: 1,
					sourceUrl: "" ,
          thumbnailUrl: 'https://i.pinimg.com/564x/9e/35/a3/9e35a3e94ce80399d8faded8e88a95f8.jpg' ,
					renderLargerThumbnail: false,
          showAdAttribution: false
         }}	
}

await conn.replyList(from, listMessage ,{ quoted : mek }) 
	      } catch (e) {
reply(N_FOUND)
l(e)
}
})


cmd({
  pattern: "fmod",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    const getmod = await mods();
    const modlink = getmod.com_fmwhatsapp.link;
await conn.sendMessage(from, { react: { text: '📥', key: mek.key }})
//let [modlink, modname] = q.split `+`;
await conn.sendMessage(from, { document: { url: modlink }, fileName:  getmod.com_fmwhatsapp.name + '.apk' , mimetype: 'application/vnd.android.package-archive'}, {quoted: mek})
await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
  reply('*ERROR !!*')
l(e)
}
})


cmd({
  pattern: "wmod",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    const getmod = await mods();
    const modlink = getmod.com_whatsapp.link;
await conn.sendMessage(from, { react: { text: '📥', key: mek.key }})
//let [modlink, modname] = q.split `+`;
await conn.sendMessage(from, { document: { url: modlink }, fileName:  getmod.com_whatsapp.name + '.apk' , mimetype: 'application/vnd.android.package-archive'}, {quoted: mek})
await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
  reply('*ERROR !!*')
l(e)
}
})

cmd({
  pattern: "gmod",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    const getmod = await mods();
    const modlink = getmod.com_gbwhatsapp.link;
await conn.sendMessage(from, { react: { text: '📥', key: mek.key }})
//let [modlink, modname] = q.split `+`;
await conn.sendMessage(from, { document: { url: modlink }, fileName:  getmod.com_gbwhatsapp.name + '.apk' , mimetype: 'application/vnd.android.package-archive'}, {quoted: mek})
await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
  reply('*ERROR !!*')
l(e)
}
})


cmd({
  pattern: "ymod",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    const getmod = await mods();
    const modlink = getmod.com_yowhatsapp.link;
await conn.sendMessage(from, { react: { text: '📥', key: mek.key }})
//let [modlink, modname] = q.split `+`;
await conn.sendMessage(from, { document: { url: modlink }, fileName:  getmod.com_yowhatsapp.name + '.apk' , mimetype: 'application/vnd.android.package-archive'}, {quoted: mek})
await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
  reply('*ERROR !!*')
l(e)
}
})
