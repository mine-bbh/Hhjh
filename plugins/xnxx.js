const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const axios = require('axios')
const cheerio = require('cheerio')
const fetch = require('node-fetch')


cmd({
    pattern: "xnxx",
    alias: ["xnxxs"],
    use: '.xnxx <query>',
    react: "🍟",
    desc: "Search and DOWNLOAD VIDEOS from xnxx.",
    category: "search",
    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
//if (!isMe) return await reply('🚩 You are not a premium user\nbuy via message to owner!!')
if (!q) return reply('🚩 *Please give me a url*')
      const response = await fetch(q);
      const $k = cheerio.load(await response.text());
      
      const link = $k('#link-74572 > td:nth-child(1) > a').attr('href');
      const sds = $k('#link-74572 > td:nth-child(3)').text().trim()
      const scraper = await fetch(link);
      const $ = cheerio.load(await scraper.text());
      const sd = $('#link').attr('href');
      
      const link2 = $k('#link-74573 > td:nth-child(1) > a').attr('href');
      const hds = $k('#link-74573 > td:nth-child(3)').text().trim()
      const scraper2 = await fetch(link2);
      const $s = cheerio.load(await scraper2.text());
      const hd = $s('#link').attr('href');

      const link3 = $k('#link-74574 > td:nth-child(1) > a').attr('href');
      const fhds = $k('#link-74574 > td:nth-child(3)').text().trim()
      const scraper3 = await fetch(link3);
      const $v = cheerio.load(await scraper3.text());
      const fhd = $v('#link').attr('href');
      
let wm = `© 𝖰𝗎𝖾𝖾𝗇 𝗄𝖾𝗇𝗓𝗂 𝗆𝖽 v${require("../package.json").version} (Test)\nsɪᴍᴘʟᴇ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴅᴀɴᴜxᴢᴢ 🅥`
const msg = `乂 *M O V I E - D L*`

                let buttons = [{ 
               name: 'single_select',
            buttonParamsJson: JSON.stringify({
               title: 'Tap Here!',
               sections: [{
                  rows: [{
                     title: '480 P,
                     description: `Download 480P quality video \n File Size: ${sds}`,
                     id: ".mega" + sd
                  }, {
                     title: '720 P',
                     description: `Download 720P quality video \n File Size: ${hds}`,
                     id: ".mega" + hd
                  }, {
                     title: '1080 P',
                     description: `Download 480P quality video \n File Size: ${fhds}`,
                     id: ".mega" + fhd
                  }]
               }]
            })
         }]

		
            let message = {
                image: yt.thumbnail,
                header: '',
                footer: wm,
                body: msg

            }
            return await conn.sendButtonMessage(from, buttons, m, message)
} catch (e) {
    console.log(e)
  await conn.sendMessage(from, { text: '🚩 *Error !!*' }, { quoted: mek } )
}
})

//------------------------dl---------------

