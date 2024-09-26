const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const gis = require('async-g-i-s')
const {unsplash, pixabay} = require("@sl-code-lords/image-library")
const axios = require('axios')
const cheerio = require('cheerio')

var imgmsg = "```Please write a few words!```"
var desc = "Search for related pics on Google."
var desc2 = "Search for related pics on unsplash.com."
var desc3 = "Search for related pics on pixabay.com."
var desc4 = "Searche for related pics on bing."
var desc4 = "Searche for related wallpapers."
let foot = `© 𝖰𝗎𝖾𝖾𝗇 𝗄𝖾𝗇𝗓𝗂 𝗆𝖽 v${require("../package.json").version} (Test)\nsɪᴍᴘʟᴇ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴅᴀɴᴜxᴢᴢ 🅥`
var errt = "*I couldn't find anything :(*"

cmd({
    pattern: "img2",
    react: '🖼️',
    alias: ["unsplash"],
    desc: desc2,
    category: "download",
    use: '.unsplash <query>',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await  reply(imgmsg)
let wm = `© 𝖰𝗎𝖾𝖾𝗇 𝗄𝖾𝗇𝗓𝗂 𝗆𝖽 v${require("../package.json").version} (Test)\nsɪᴍᴘʟᴇ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴅᴀɴᴜxᴢᴢ 🅥`
const msg = `☩ U N S P L A S H - D O W N L O A D E R `
const results = await unsplash.search({"query": q, page: 1})
let data = results
if (data.result.length < 1) return await conn.sendMessage(from, { text: N_FOUND }, { quoted: mek } )
var sections = []
let nombor = 1
for (var i = 0; i < data.result.length; i++) {
          sections.push({
            rows: [{
              title: 'Image number: ' + nombor++ ,
              id: prefix + 'dimg ' + data.result[i]
            }]
          })
        }
        const buttons = [{
          name: 'single_select',
          buttonParamsJson: JSON.stringify({
            title: 'Tap Here!',
            sections
          })
        }]
        let message = {
            image: `https://github.com/G4tito/Simple-WaBot/blob/main/media/image/cover.jpg?raw=true`,
            header: '',
            footer: wm,
            body: msg
        }
return conn.sendButtonMessage(from, buttons, m, message) 
} catch (e) {
reply(errt)
console.log(e)
}
})
cmd({
    pattern: "img3",
    react: '🖼️',
    alias: ["pixabay"],
    desc: desc3,
    category: "download",
    use: '.pixabay <query>',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await  reply(imgmsg)
let wm = `© 𝖰𝗎𝖾𝖾𝗇 𝗄𝖾𝗇𝗓𝗂 𝗆𝖽 v${require("../package.json").version} (Test)\nsɪᴍᴘʟᴇ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴅᴀɴᴜxᴢᴢ 🅥`
const msg = `☩ P I X A B A Y - D O W N L O A D E R `
const results = await pixabay.search({"query": q, page: 1})
let data = results
if (data.result.length < 1) return await conn.sendMessage(from, { text: N_FOUND }, { quoted: mek } )
var sections = []
let nombor = 1
for (var i = 0; i < data.result.length; i++) {
          sections.push({
            rows: [{
              title: 'Image number: ' + nombor++ ,
              id: prefix + 'dimg ' + data.result[i]
            }]
          })
        }
        const buttons = [{
          name: 'single_select',
          buttonParamsJson: JSON.stringify({
            title: 'Tap Here!',
            sections
          })
        }]
        let message = {
            image: `https://github.com/G4tito/Simple-WaBot/blob/main/media/image/cover.jpg?raw=true`,
            header: '',
            footer: wm,
            body: msg
        }
return conn.sendButtonMessage(from, buttons, m, message) 
} catch (e) {
reply(errt)
console.log(e)
}
})
//===============gimage scrapper=================
async function GoogleImage(query) {
  const response = await fetch(`https://www.google.com/search?q=${query}&tbm=isch`, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9,id;q=0.8"
      }
    }),
    data = await response.text(),
    matches = cheerio.load(data).html().matchAll(/\[1,\[0,"(?<id>[\d\w\-_]+)",\["https?:\/\/(?:[^"]+)",\d+,\d+\]\s?,\["(?<url>https?:\/\/(?:[^"]+))",\d+,\d+\]/gm);
  return [...matches].map(({
    groups
  }) => {
    return url = groups?.url, decodeURIComponent(JSON.parse(`"${url}"`));
    var url;
  }).filter(v => /.*\.jpe?g|png$/gi.test(v));
}
async function googleImage(query) {
  const response = await fetch(`https://www.google.com/search?q=${encodeURIComponent(query)}&tbm=isch`, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8"
    }
  });
  if (!response.ok) {
    throw new Error("Network response was not ok " + response.statusText);
  }
  const data = await response.text();
  const $ = cheerio.load(data);
  const pattern = /\[1,\[0,"(?<id>[\d\w\-_]+)",\["https?:\/\/(?:[^"]+)",\d+,\d+\]\s?,\["(?<url>https?:\/\/(?:[^"]+))",\d+,\d+\]/gm;
  const matches = $.html().matchAll(pattern);
  const decodeUrl = url => decodeURIComponent(JSON.parse(`"${url}"`));
  return [...matches].map(({
    groups
  }) => decodeUrl(groups?.url)).filter(v => /.*\.(jpe?g|png)$/gi.test(v));
}
//-----------------------
cmd({
    pattern: "img",
    react: '🖼️',
    alias: ["gimage","googleimage","gimg"],
    desc: desc4,
    desc: desc,
    category: "download",
    use: '.gimage <query>',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await  reply(imgmsg)
let wm = `☩ G I M A G E - D O W N L O A D E R

© 𝖰𝗎𝖾𝖾𝗇 𝗄𝖾𝗇𝗓𝗂 𝗆𝖽 v${require("../package.json").version} (Test)\nsɪᴍᴘʟᴇ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴅᴀɴᴜxᴢᴢ 🅥
 `
if (!q) return reply('❓ *Please give me a query for Search Images*')
const data = await googleImage(q)
await conn.sendMessage(from, { image: { url : data[0] }, caption: wm }, { quoted: mek })
await conn.sendMessage(from, { image: { url : data[1] }, caption: wm }, { quoted: mek })
await conn.sendMessage(from, { image: { url : data[2] }, caption: wm }, { quoted: mek })
await conn.sendMessage(from, { image: { url : data[3] }, caption: wm }, { quoted: mek })
await conn.sendMessage(from, { image: { url : data[4] }, caption: wm }, { quoted: mek })
} catch (e) {
let wm = `☩ G I M A G E - D O W N L O A D E R

© 𝖰𝗎𝖾𝖾𝗇 𝗄𝖾𝗇𝗓𝗂 𝗆𝖽 v${require("../package.json").version} (Test)\nsɪᴍᴘʟᴇ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴅᴀɴᴜxᴢᴢ 🅥
 `
const data = await GoogleImage(q)
await conn.sendMessage(from, { image: { url : data[0] }, caption: wm }, { quoted: mek })
await conn.sendMessage(from, { image: { url : data[1] }, caption: wm }, { quoted: mek })
await conn.sendMessage(from, { image: { url : data[2] }, caption: wm }, { quoted: mek })
await conn.sendMessage(from, { image: { url : data[3] }, caption: wm }, { quoted: mek })
await conn.sendMessage(from, { image: { url : data[4] }, caption: wm }, { quoted: mek })
console.log(e)
}
})

//==============================================================================
async function wallpaper(query) {
    try {
        const { data } = await axios.get('https://www.wallpaperflare.com/search?wallpaper=' + query, {
            headers: {
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                "cookie": "_ga=GA1.2.863074474.1624987429; _gid=GA1.2.857771494.1624987429; __gads=ID=84d12a6ae82d0a63-2242b0820eca0058:T=1624987427:RT=1624987427:S=ALNI_MaJYaH0-_xRbokdDkQ0B49vSYgYcQ"
            }
        });
        const $ = cheerio.load(data);
        const result = [];
        $('#gallery > li > figure > a').each(function (a, b) {
            result.push($(b).find('img').attr('data-src'));
        });
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
//=============================================================================
cmd({
    pattern: "wallpaper",
    react: '🖼️',
    alias: ["img4","wallp","wp"],
    desc: desc4,
    category: "download",
    use: '.wallpaper <query>',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await  reply(imgmsg)
let wm = `© 𝖰𝗎𝖾𝖾𝗇 𝗄𝖾𝗇𝗓𝗂 𝗆𝖽 v${require("../package.json").version} (Test)\nsɪᴍᴘʟᴇ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴅᴀɴᴜxᴢᴢ 🅥`
const msg = `☩ W A L L P A P E R - D O W N L O A D E R `
let res = await wallpaper(q)
if (res < 1) return await conn.sendMessage(from, { text: N_FOUND }, { quoted: mek } )
var sections = []
let nombor = 1
for (var i = 0; i < res.length; i++) {
          sections.push({
            rows: [{
              title: 'Image number: ' + nombor++ ,
              description: "Source: wallpaperflare.com",
              id: prefix + 'dimg ' + res[i]
            }]
          })
        }
        const buttons = [{
          name: 'single_select',
          buttonParamsJson: JSON.stringify({
            title: 'Tap Here!',
            sections
          })
        }]
        let message = {
            image: `https://github.com/G4tito/Simple-WaBot/blob/main/media/image/cover.jpg?raw=true`,
            header: '',
            footer: wm,
            body: msg
        }
return conn.sendButtonMessage(from, buttons, m, message) 
} catch (e) {
  reply(errt)
console.log(e)
}
})

cmd({
    pattern: "dimg",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await conn.sendMessage(from, { react: { text: '🔃', key: mek.key }})
    await conn.sendMessage(from, { image: { url: q }, caption: foot }, { quoted: mek })
    await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
    reply(errt)
  console.log(e)
}
})

//---------------------------pin------------------

cmd({
    pattern: "pin",
    react: '🖼️',
    alias: ["pinterest"],
    desc: desc2,
    category: "download",
    use: '.pin <query>',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await  reply(imgmsg)
let wm = `© 𝖰𝗎𝖾𝖾𝗇 𝗄𝖾𝗇𝗓𝗂 𝗆𝖽 v${require("../package.json").version} (Test)\nsɪᴍᴘʟᴇ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴅᴀɴᴜxᴢᴢ 🅥`
const msg = `☩ P I N - D O W N L O A D E R `
const res = await fetchJson('https://allstars-apis.vercel.app/pinterest?search=' + q)
let data = res.data
if (res.data.length < 1) return await conn.sendMessage(from, { text: N_FOUND }, { quoted: mek } )
var sections = []
let nombor = 1
for (var i = 0; i < res.data.length; i++) {
          sections.push({
            rows: [{
              title: 'Image number: ' + nombor++ ,
              id: prefix + 'dimg ' + res.data[i]
            }]
          })
        }
        const buttons = [{
          name: 'single_select',
          buttonParamsJson: JSON.stringify({
            title: 'Tap Here!',
            sections
          })
        }]
        let message = {
            image: `https://github.com/G4tito/Simple-WaBot/blob/main/media/image/cover.jpg?raw=true`,
            header: '',
            footer: wm,
            body: msg
        }
return conn.sendButtonMessage(from, buttons, m, message) 
} catch (e) {
reply(errt)
console.log(e)
}
})
