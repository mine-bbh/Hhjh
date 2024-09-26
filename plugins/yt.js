const config = require('../config')
const dl = require('@bochilteam/scraper') 
const fs = require('fs')
const {
    getBuffer,
    getGroupAdmins,
    getRandom,
    getsize,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson
} = require('../lib/functions')
const {
    cmd,
    commands
} = require('../command')
const ufs = require('../lib/ufs');
var sizetoo =  "_This file size is too big_"
const yts = require("ytsearch-venom")
const { download } = require('../lib/youtube');
const fg = require('api-dylux')
const ytdl = require('@distube/ytdl-core')
const { sizeFormatter } = require('human-readable')

let foot = `© 𝖰𝗎𝖾𝖾𝗇 𝗄𝖾𝗇𝗓𝗂 𝗆𝖽 v${require("../package.json").version} (Test)\nsɪᴍᴘʟᴇ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴅᴀɴᴜxᴢᴢ 🅥`
let newsize = config.MAX_SIZE * 1024 * 1024

cmd({
    pattern: "yts",
    alias: ["ytsearch","yt"],
    use: '.yts  <query>',
    react: "🍟",
    desc: 'Search videos from youtube',
    category: "search",
    filename: __filename

},

    async (conn, mek, m, { from, q, reply }) => {
        try {
            if (!q) return await reply('*Please enter a query to search!*')
            let wm = `© 𝖰𝗎𝖾𝖾𝗇 𝗄𝖾𝗇𝗓𝗂 𝗆𝖽 v${require("../package.json").version} (Test)\nsɪᴍᴘʟᴇ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴅᴀɴᴜxᴢᴢ 🅥`
            const msg = `乂 Y T - S E A R C H `
            let yt = await (await yts(q)).all
            var sections = []
   yt.filter(p => p.type == 'video').map(async (v, i) => {
      if (i < 10) {
        sections.push({
          rows: [{
            title: `${v.title}`,
            description: `AUDIO`,
            id: `.song ${v.url}`
          }, {
            title: `${v.title}`,
            description: `VIDEO`,
            id: `.video ${v.url}`
          }]
        })
      }
    })

        const buttons = [{
          name: 'single_select',
          buttonParamsJson: JSON.stringify({
            title: 'Tap Here!',
            sections
          })
        },
                {
           name: "cta_url",
           buttonParamsJson: JSON.stringify({
             display_text: 'Join Our Channel',
             url: `https://whatsapp.com/channel/0029Vaa1t6l5q08V1jdCS33q`,
             merchant_url: `https://whatsapp.com/channel/0029Vaa1t6l5q08V1jdCS33q`
            }),
           }
        ]
        let message = {
            image: `https://cdn.freelogovectors.net/wp-content/uploads/2023/05/youtubelogo-freelogovectors.net_.png`,
            header: '',
            footer: wm,
            body: msg
        }
return conn.sendButtonMessage(from, buttons, m, message) 
        } catch (e) {
            console.log(e)
            reply('*Error !!*')
        }
    });

cmd({
    pattern: "video",
    alias: ["ytv","ytmp4"],
    use: '.video  <video name>',
    react: "🍟",
    desc: 'Download videos from youtube',
    category: "download",
    filename: __filename

},

    async (conn, m, mek, { from, q, reply }) => {
        try {
            if (!q) return await reply('*Please enter a query or a url!*')
            if (q.includes('https://')) {
	        //const url = q.replace(/\?si=[^&]*/, '')
                let wm = `© 𝖰𝗎𝖾𝖾𝗇 𝗄𝖾𝗇𝗓𝗂 𝗆𝖽 v${require("../package.json").version} (Test)\nsɪᴍᴘʟᴇ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴅᴀɴᴜxᴢᴢ 🅥`
	        const yt = await dl.youtubedl(q).catch(async () => await dl.youtubedlv2(q))
		//let { title, dl_url, quality, size, sizeB } = det
            const msg = `乂  *Y T - V I D E O*
	    
 *◦Title :* ${yt.title}
 *◦Duration :* ${yt.duration} s

    `
                let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: 'Follow Our Channel',
                        url: `https://whatsapp.com/channel/0029Vaa1t6l5q08V1jdCS33q`,
                        merchant_url: `https://whatsapp.com/channel/0029Vaa1t6l5q08V1jdCS33q`
                    }),
                },
                { name: 'single_select',
            buttonParamsJson: JSON.stringify({
               title: 'Tap Here!',
               sections: [{
                  rows: [{
                     title: '144 P',
                     description: 'Download 144P quality video',
                     id: ".yt144" + url
                  }, {
                     title: '240 P',
                     description: 'Download 240P quality video',
                     id: ".yt240" + url
                  }, {
                     title: '360 P',
                     description: 'Download 360P quality video',
                     id: ".yt360" + url
                  }, {
                     title: '480 P',
                     description: 'Download 480P quality video',
                     id: ".yt480" + url
                  }, {
                     title: '720 P',
                     description: 'Download 720P quality video',
                     id: ".yt720" + url
                  }, {
                     title: '1080 P',
                     description: 'Download 1080P quality video',
                     id: ".yt1080" + url
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
} else {
	    const url = q.replace(/\?si=[^&]*/, '')
            var results = await yts(url);
            var result = results.videos[0]

         let caption = `乂  *Y T - V I D E O*\n\n`
         caption += `	◦  *Title* : ${result.title}\n`
         caption += `	◦  *Views* : ${result.views}\n`
         caption += `	◦  *Duration* : ${result.duration}\n`
         caption += `	◦  *URL* : ${result.url}\n\n`
         
                 let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: 'Follow Our Channel',
                        url: `https://whatsapp.com/channel/0029Vaa1t6l5q08V1jdCS33q`,
                        merchant_url: `https://whatsapp.com/channel/0029Vaa1t6l5q08V1jdCS33q`
                    }),
                },
                { name: 'single_select',
            buttonParamsJson: JSON.stringify({
               title: 'Tap Here!',
               sections: [{
                  rows: [{
                     title: '144 P',
                     description: 'Download 144P quality video',
                     id: ".yt144 " + result.url
                  }, {
                     title: '240 P',
                     description: 'Download 240P quality video',
                     id: ".yt240 " + result.url
                  }, {
                     title: '360 P',
                     description: 'Download 360P quality video',
                     id: ".yt360 " + result.url
                  }, {
                     title: '480 P',
                     description: 'Download 480P quality video',
                     id: ".yt480 " + result.url
                  }, {
                     title: '720 P',
                     description: 'Download 720P quality video',
                     id: ".yt720 " + result.url
                  }, {
                     title: '1080 P',
                     description: 'Download 1080P quality video',
                     id: ".yt1080 " + result.url
                  }]
               }]
            })
         }]

		
            let message = {
                image: result.thumbnail,
                header: '',
                footer: foot,
                body: caption

            }
            return await conn.sendButtonMessage(from, buttons, m, message)
	}
        } catch (e) {
            console.log(e)
            reply('*Error !!*')
        }
    });

//==============================================================================

cmd({
    pattern: "song",
    alias: ["ytmp3","play"],
    use: '.song lelena',
    react: "🍟",
    desc: 'Download audios from youtube',
    category: "download",
    filename: __filename

},

    async (conn, m, mek, { from, q, reply }) => {
        try {
            if (!q) return await reply('*Please enter a query or a url!*')
            const url = q.replace(/\?si=[^&]*/, '');
            var results = await yts(url);
            let wm = `© 𝖰𝗎𝖾𝖾𝗇 𝗄𝖾𝗇𝗓𝗂 𝗆𝖽 v${require("../package.json").version} (Test)\nsɪᴍᴘʟᴇ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴅᴀɴᴜxᴢᴢ 🅥`
            var result = results.videos[0]
         let caption = `乂  *Y T - V I D E O*\n\n`
         caption += `	◦  *Title* : ${result.title}\n`
         caption += `	◦  *Views* : ${result.views}\n`
         caption += `	◦  *Duration* : ${result.duration}\n`
         caption += `	◦  *URL* : ${result.url}\n\n`

            let buttons = [
            {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                    display_text: "Audio",
                    id: ".audsong " + result.url
                }),
            },
            {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                    display_text: "Document",
                    id: ".docsong " + result.url
                }),
            }
            ]
            let message = {
                image: result.thumbnail,
                header: '',
                footer: wm,
                body: caption

            }
            return await conn.sendButtonMessage(from, buttons, m, message)
        } catch (e) {
            console.log(e)
            reply('*Error !!*')
        }
    });
