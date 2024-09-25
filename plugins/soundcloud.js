const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
var request = require("request")
var cheerio = require("cheerio")

let axios=require("axios");
async function ssearch (i){let e="https://m.soundcloud.com",t=await axios.get(`${e}/search?q=${encodeURIComponent(i)}`,{headers:{"User-Agent":'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'}}),a=cheerio.load(t.data),d=[];return a("div > ul > li > div").each((function(i,t){let r=a(t).find("a").attr("aria-label"),v=e+a(t).find("a").attr("href"),s=a(t).find("a > div > div > div > picture > img").attr("src"),n=a(t).find("a > div > div > div").eq(1).text(),o=a(t).find("a > div > div > div > div > div").eq(0).text(),u=a(t).find("a > div > div > div > div > div").eq(1).text(),l=a(t).find("a > div > div > div > div > div").eq(2).text();d.push({title:r,url:v,thumb:s,artist:n,views:o,release:l,timestamp:u})})),{status:t.status,creator:"Caliph",result:d}}
let ayo = `© 𝖰𝗎𝖾𝖾𝗇 𝗄𝖾𝗇𝗓𝗂 𝗆𝖽 v${require("../package.json").version} (Test)\nsɪᴍᴘʟᴇ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴅᴀɴᴜxᴢᴢ 🅥`
var N_FOUND = "*I couldn't find anything :(*"
var urlneed = "It downloads songs from soundcloud."
var imgmsg = "```Please write a few words!```"

cmd({
    pattern: "soundcloud",
    react: "📱",
    alias: ["song2","scdl"],
    desc: urlneed,
    category: "download",
    use: '.soundcloud lelena',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await conn.sendMessage(from , { text: imgmsg }, { quoted: mek } )        
const data2 = await ssearch(q)
const data = data2.result
let wm = `© 𝖰𝗎𝖾𝖾𝗇 𝗄𝖾𝗇𝗓𝗂 𝗆𝖽 v${require("../package.json").version} (Test)\nsɪᴍᴘʟᴇ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴅᴀɴᴜxᴢᴢ 🅥`
if (data.length < 1) return await conn.sendMessage(from, { text: N_FOUND }, { quoted: mek } )

var sections = []
        for (var i = 0; i < data.length; i++) {
        if(data[i].thumb && !data[i].views.includes('Follow')){
          sections.push({
            rows: [{
              title: data[i].title,
	      description:  data[i].artist + ' | ' + data[i].views + ' | '+ data[i].release + ' | '+ data[i].timestamp,
              id: prefix + 'selectaud2 ' + data[i].url
            }]
          })
        }}

                let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: 'Join Our Channel',
                        url: `https://whatsapp.com/channel/0029Vaa1t6l5q08V1jdCS33q`,
                        merchant_url: `https://whatsapp.com/channel/0029Vaa1t6l5q08V1jdCS33q`
                    }),
                },
                {
                    name: 'single_select',
                    buttonParamsJson: JSON.stringify({
                        title: 'Result from m.soundcloud.com 📲',
                        sections
                    })
                }]

let msg =  `┌───[ 😼ＫＥＮＺＩ-ＭＤ🤍 ]

   *SOUNDCLOUD DOWNLOADER*

*📱 Entered Name:* ${q}`
    
        let message = {
            image: `https://cdn.freelogovectors.net/wp-content/uploads/2023/05/soundcloud-logo-freelogovectors.net_.png`,
            header: '',
            footer: wm,
            body: msg
        }
return conn.sendButtonMessage(from, buttons, m, message) 
} catch (e) {
  reply('*ERROR !!*')
  console.log(e)
}
})

cmd({
  alias: ["selectaud2"],
  filename: __filename
},
async(conn, mek, m,{from, l, quoted, prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let wm = `© 𝖰𝗎𝖾𝖾𝗇 𝗄𝖾𝗇𝗓𝗂 𝗆𝖽 v${require("../package.json").version} (Test)\nsɪᴍᴘʟᴇ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴅᴀɴᴜxᴢᴢ 🅥`
let dat = `┌───[ 😼ＫＥＮＺＩ-ＭＤ🤍 ]

  *SELECT SONG TYPE*`
	
            let buttons = [
            {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                    display_text: "DOCUMENT SONG",
                    id: prefix + 'sounddoc ' + q
                }),
            },
            {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                    display_text: "AUDIO SONG",
                    id: prefix + 'soundaud ' + q
                }),
            }
            ]
            let message = {
                image: `https://cdn.freelogovectors.net/wp-content/uploads/2023/05/soundcloud-logo-freelogovectors.net_.png`,
                header: '',
                footer: wm,
                body: dat

            }
            return await conn.sendButtonMessage(from, buttons, m, message)
} catch (e) {
reply(N_FOUND)
console.log(e)
}
})

cmd({
    pattern: "sounddoc",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
await conn.sendMessage(from, { react: { text: '📥', key: mek.key }})
if(!q) return await conn.sendMessage(from , { text: '*Need link...*' }, { quoted: mek } ) 
let res = await fetchJson(`https://api.fgmods.xyz/api/downloader/soundcloud?url=${q}&apikey=2gw4M2yfB5`)
let data = res.result
let listdata = `*◦ Name :* ${data.title}
*◦ Duration :* ${data.duration}
*◦ Bitrate :* ${data.quality} `
let mal = await conn.sendMessage(from, { image: { url: data.thumb }, caption: listdata }, { quoted: mek })
conn.sendMessage(from, { document: await getBuffer(data.dl_url), mimetype: 'audio/mpeg', fileName: data.title + '.mp3', caption: AYO}, { quoted: mek })
} catch (e) {
    reply('*ERROR !!*')
  l(e)
}
})

cmd({
  pattern: "soundaud",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
await conn.sendMessage(from, { react: { text: '📥', key: mek.key }})
if(!q) return await conn.sendMessage(from , { text: '*Need link...*' }, { quoted: mek } ) 
let res = await fetchJson(`https://api.fgmods.xyz/api/downloader/soundcloud?url=${q}&apikey=2gw4M2yfB5`)
let data = res.result
let listdata = `*◦ Name :* ${data.title}
*◦ Duration :* ${data.duration}
*◦ Bitrate :* ${data.quality} `
let mal = await conn.sendMessage(from, { image: { url: data.thumb }, caption: listdata }, { quoted: mek })
conn.sendMessage(from, { audio: await getBuffer(data.dl_url), mimetype: 'audio/mpeg' }, { quoted: mek })
} catch (e) {
  reply('*ERROR !!*')
console.log(e)
}
})
