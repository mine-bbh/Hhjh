const {
  default: makeWASocket,
  getAggregateVotesInPollMessage,
  useMultiFileAuthState,
  DisconnectReason,
  getDevice,
  fetchLatestBaileysVersion,
  jidNormalizedUser,
  getContentType,
  Browsers,
  makeInMemoryStore,
  makeCacheableSignalKeyStore,
  downloadContentFromMessage,
  generateWAMessageFromContent,
  prepareWAMessageMedia,
  proto
} = require('@whiskeysockets/baileys')
const fs = require('fs')
const P = require('pino')
const config = require('./config')
const figlet = require("figlet");
const lolcatjs = require('lolcatjs');
const FileType = require('file-type')
const chalk = require('chalk')
const qrcode = require('qrcode-terminal')
const NodeCache = require('node-cache')
const util = require('util')
const {
    getBuffer,
    getGroupAdmins,
    getRandom,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson,
    fetchBuffer,
    getFile
} = require('./lib/functions')
const {
  sms,
  downloadMediaMessage
} = require("./lib/msg")
const axios = require('axios')
const {
    File
} = require('megajs')
const path = require('path')
const msgRetryCounterCache = new NodeCache()
//const prefix = '.'
const ownerNumber = ['94774500937']
const l = console.log
//===================SESSION============================
if (!fs.existsSync(__dirname + '/auth_info_baileys/creds.json')) {
    if (config.SESSION_ID) {
      const sessdata = config.SESSION_ID.replace("NEBULA=", "")
      const filer = File.fromURL(`https://mega.nz/file/${sessdata}`)
      filer.download((err, data) => {
        if (err) throw err
        fs.writeFile(__dirname + '/auth_info_baileys/creds.json', data, () => {
          console.log("Session download completed !!")
        })
      })
    }
  }
// <<==========PORTS===========>>
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
//====================================
async function connectToWA() {
    const {
        version,
        isLatest
    } = await fetchLatestBaileysVersion()
    console.log(`using WA v${version.join('.')}, isLatest: ${isLatest}`)
    const {
        state,
        saveCreds
    } = await useMultiFileAuthState(__dirname + '/auth_info_baileys/')
const conn = makeWASocket({
        logger: P({ level: 'silent' }),
        printQRInTerminal: true,
        browser: Browsers.macOS("Safari"),
        syncFullHistory: true,
        auth: state,
        version
        })

    conn.ev.on('connection.update', async (update) => {
        const {
            connection,
            lastDisconnect
        } = update
        if (connection === 'close') {
            if (lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut) {
                connectToWA()
            }
        } else if (connection === 'open') {
            console.log('----------------------------------------------------')
	    lolcatjs.fromString('[Installing plugins 🔌...!!!]')
            const path = require('path');
            fs.readdirSync("./plugins/").forEach((plugin) => {
                if (path.extname(plugin).toLowerCase() == ".js") {
                    require("./plugins/" + plugin);
                }
            });
	console.clear()
	console.log('----------------------------------------------------')
	lolcatjs.fromString(chalk.cyan(figlet.textSync('KENZI MD', {
		font: 'Bloody',
		horizontalLayout: 'full',
		verticalLayout: 'full',
		whitespaceBreak: true
	})));
		lolcatjs.fromString(chalk.cyan(figlet.textSync('MD', {
		font: 'Bloody',
		horizontalLayout: 'full',
		verticalLayout: 'full',
		whitespaceBreak: true
	})));
	console.log('----------------------------------------------------')
	lolcatjs.fromString('[SERVER STARTED!!!]')
	console.log('----------------------------------------------------')
	console.log('----------------------------------------------------')
	lolcatjs.fromString(chalk.cyan(figlet.textSync('Ayooh', {
		font: 'Bloody',
		horizontalLayout: 'full',
		verticalLayout: 'full',
		whitespaceBreak: true
	})));
	console.log('----------------------------------------------------')
	lolcatjs.fromString('[Plugins installed ✅!!!]')
	console.log('----------------------------------------------------')
	lolcatjs.fromString('[Bot connected ✅!!!]')
	console.log('----------------------------------------------------')
	lolcatjs.fromString('[Create by Ayooh.me!!!]')
	console.log('----------------------------------------------------')
	

		
            await conn.sendMessage(config.OWNER + "@s.whatsapp.net", {
text: "*ᴘɪɴᴋ-ᴠᴇɴᴏᴍ ᴍᴅ successfully connected* ✓\n> ◦ *Official GitHub* - ```https://github.com/ayooh-me```\n> ◦ ᴊᴏɪɴ ᴏᴜʀ sᴜᴘᴘᴏʀᴛ ɢʀᴏᴜᴘ ᴠɪᴀ ᴛʏᴘᴇ: .joinsup\n*ᴘɪɴᴋ-ᴠᴇɴᴏᴍ ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴄʀᴇᴀᴛᴇᴅ ʙʏ • ᴀʏᴏᴅʏᴀ ᴠɪᴄʜᴀᴋsʜᴀɴᴀ*",
contextInfo: {
externalAdReply: {
title: "ᴘɪɴᴋ ᴠᴇɴᴏᴍ-ᴍᴅ\nSuccessfully Connected !",
thumbnailUrl: "https://cdn.dribbble.com/users/15468/screenshots/2450252/logo.jpg",
sourceUrl: "",
mediaType: 1,
renderLargerThumbnail: true
}}}) 
    }
  })

    conn.ev.on('creds.update', saveCreds)
    conn.ev.on('messages.upsert', async (mek) => {
      try {
            mek = mek.messages[0]
            if (!mek.message) return
            mek.message = (getContentType(mek.message) === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
             //----------------AUTO STATUS VIEW-------------------------------
            if (config.STATUS_VIEW === 'true') {
            if (mek.key && mek.key.remoteJid === 'status@broadcast') {
            await conn.readMessages([mek.key])
            }
            }
            if (mek.key && mek.key.remoteJid === 'status@broadcast') return
	    if (config.ALWAYS_ONLINE == 'true'){
                await conn.sendPresenceUpdate('available', mek.key.remoteJid)
            }else{
                await conn.sendPresenceUpdate('unavailable', mek.key.remoteJid)
            }
            if(config.AUTO_TYPING == true){
                conn.sendPresenceUpdate('composing', mek.key.remoteJid)
            }
	    if(config.AUTO_RECORDING == true){
                //await conn.sendPresenceUpdate('recording', mek.key.remoteJid)
		conn.sendPresenceUpdate('recording', mek.key.remoteJid)
            }
	
            const m = sms(conn, mek)
            const type = getContentType(mek.message)
            const content = JSON.stringify(mek.message)
            const from = mek.key.remoteJid
            const quoted = type == 'extendedTextMessage' && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
            const body = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text :(type == 'interactiveResponseMessage' ) ? mek.message.interactiveResponseMessage  && mek.message.interactiveResponseMessage.nativeFlowResponseMessage && JSON.parse(mek.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson) && JSON.parse(mek.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id :(type == 'templateButtonReplyMessage' )? mek.message.templateButtonReplyMessage && mek.message.templateButtonReplyMessage.selectedId  : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : ''
	    //const prefix = /[\uD800-\uDBFF][\uDC00-\uDFFF]/gi.test(body) ? body.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/gi)[0] : /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi)[0] : ''
	        const prefix = /^./.test(body) ? body.match(/^./gi) : '#';
            const isCmd = body.startsWith(prefix)
            const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
            const args = body.trim().split(/ +/).slice(1)
            const q = args.join(' ')
            const isGroup = from.endsWith('@g.us')
            const sender = mek.key.fromMe ? (conn.user.id.split(':')[0] + '@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
            const senderNumber = sender.split('@')[0]
            const botNumber = conn.user.id.split(':')[0]
            const pushname = mek.pushName || 'Sin Nombre'
	        const ownbot = config.OWNER
	        const isownbot = ownbot?.includes(senderNumber)
            const sunny = '94774500937'
            const isSunny = sunny?.includes(senderNumber)
            const ayodya = '94774500937'
            const isAyodya = ayodya?.includes(senderNumber)
	        const developers = '94774500937'
            const isdev = developers.includes(senderNumber)
            const isbot = botNumber.includes(senderNumber)
            const isMe = isbot ? isbot : isdev
            const isOwner = ownerNumber.includes(senderNumber) || isMe
            const botNumber2 = await jidNormalizedUser(conn.user.id);
            const groupMetadata = isGroup ? await conn.groupMetadata(from).catch(e => {}) : ''
            const groupName = isGroup ? groupMetadata.subject : ''
            const participants = isGroup ? await groupMetadata.participants : ''
            const groupAdmins = isGroup ? await getGroupAdmins(participants) : ''
            const isBotAdmins = isGroup ? groupAdmins.includes(botNumber2) : false
            const isAdmins = isGroup ? groupAdmins.includes(sender) : false
            const isreaction = m.message.reactionMessage ? true : false
            const isAnti = (teks) => {
                let getdata = teks
                for (let i = 0; i < getdata.length; i++) {
                    if (getdata[i] === from) return true
                }
                return false
            }
            const reply = async (teks) => {
  return await conn.sendMessage(from, { text: teks ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363192956026815@newsletter',
      newsletterName: "Ｄａｒｋ Ｎｅｏｎ Ｃｙｂｅｒｚ 🅥",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'Qᴜᴇᴇɴ-ᴋᴇɴᴢɪ ᴍᴅ ᴠ2 ジ',
body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://github.com/mine-bbh" ,
thumbnailUrl: 'https://images.app.goo.gl/yLorABL2fPLTeD6d7' ,
renderLargerThumbnail: false,
showAdAttribution: false
}
}}, { quoted: mek})
                }
            
            conn.edit = async (mek, newmg) => {
                await conn.relayMessage(from, {
                    protocolMessage: {
                        key: mek.key,
                        type: 14,
                        editedMessage: {
                            conversation: newmg
                        }
                    }
                }, {})
            }

//-------------------------------send file url-------------------------------
        conn.sendFileUrl = async(jid, url, caption, quoted, options = {}) => {
          let mime = '';
          let res = await axios.head(url)
          mime = res.headers['content-type']
          if (mime.split("/")[1] === "gif") {
              return conn.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options }, {   ...options })              
          }
          let type = mime.split("/")[0] + "Message"
          if (mime === "application/pdf") {
              return conn.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options }, {   ...options })
          }
          if (mime.split("/")[0] === "image") {
              return conn.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options }, {   ...options })
          }
          if (mime.split("/")[0] === "video") {
              return conn.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options }, {   ...options })
          }
          if (mime.split("/")[0] === "audio") {
              return conn.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options }, {    ...options })
          }
        }
//============================for rvo================================================
        conn.downloadAndSaveMediaMessage = async(message, filename, attachExtension = true) => {
                let quoted = message.msg ? message.msg : message
                let mime = (message.msg || message).mimetype || ''
                let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
                const stream = await downloadContentFromMessage(quoted, messageType)
                let buffer = Buffer.from([])
                for await (const chunk of stream) {
                    buffer = Buffer.concat([buffer, chunk])
                }
                let type = await FileType.fromBuffer(buffer)
                trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
                    // save to file
                await fs.writeFileSync(trueFileName, buffer)
                return trueFileName
            }

//============================btn fuction============================================
conn.sendButtonMessage = async (jid, buttons, quoted, opts = {}) => {

                let header;
                if (opts?.video) {
                    var video = await prepareWAMessageMedia({
                        video: {
                            url: opts && opts.video ? opts.video : ''
                        }
                    }, {
                        upload: conn.waUploadToServer
                    })
                    header = {
                        title: opts && opts.header ? opts.header : '',
                        hasMediaAttachment: true,
                        videoMessage: video.videoMessage,
                    }

                } else if (opts?.image) {
                    var image = await prepareWAMessageMedia({
                        image: {
                            url: opts && opts.image ? opts.image : ''
                        }
                    }, {
                        upload: conn.waUploadToServer
                    })
                    header = {
                        title: opts && opts.header ? opts.header : '',
                        hasMediaAttachment: true,
                        imageMessage: image.imageMessage,
                    }

                } else {
                    header = {
                        title: opts && opts.header ? opts.header : '',
                        hasMediaAttachment: false,
                    }
                }


                let message = generateWAMessageFromContent(jid, {
                    viewOnceMessage: {
                        message: {
                            messageContextInfo: {
                                deviceListMetadata: {},
                                deviceListMetadataVersion: 2,
                            },
                            interactiveMessage: {
                                body: {
                                    text: opts && opts.body ? opts.body : ''
                                },
                                footer: {
                                    text: opts && opts.footer ? opts.footer : ''
                                },
                                header: header,
                                nativeFlowMessage: {
                                    buttons: buttons,
                                    messageParamsJson: ''
                                },
                           contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363192956026815@newsletter',
                  newsletterName: "Ｄａｒｋ Ｎｅｏｎ Ｃｙｂｅｒｚ 🅥",
                  serverMessageId: 1
                },
                externalAdReply: { 
title: 'Qᴜᴇᴇɴ-ᴋᴇɴᴢɪ ᴍᴅ ᴠ2 ジ',
body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://github.com/shashikalanipuni05",
thumbnailUrl: "https://images.app.goo.gl/2S5MC7GThMwydoSh7",
renderLargerThumbnail: true

                }
                           }
                            }
                        }
                    }
                },{
                    quoted: quoted
                })
                //await conn.sendPresenceUpdate('composing', jid)
                //await sleep(500 * 1);
                conn.relayMessage(jid, message["message"], {
                    messageId: message.key.id
                })
            }
           //==================================Dev React================================
		  if(isAyodya){
                  if(!isreaction){
                  await conn.sendMessage(from, { react: { text: '😉', key: mek.key } })
                   }
                }
		 else if(isSunny){
                 if(!isreaction){
                 await conn.sendMessage(from, { react: { text: '⚖️', key: mek.key } });
              }
	      }
            //=======Anti jid=======
	    if (from === "120363289450481087@g.us") return
          
            //==================================plugin map================================
            const events = require('./command')
            const cmdName = isCmd ? body.slice(1).trim().split(" ")[0].toLowerCase() : false;
            if (isCmd) {
                const cmd = events.commands.find((cmd) => cmd.pattern === (cmdName)) || events.commands.find((cmd) => cmd.alias && cmd.alias.includes(cmdName))
                if (cmd) {
                    if (cmd.react) conn.sendMessage(from, {
                        react: {
                            text: cmd.react,
                            key: mek.key
                        }
                    })

                    try {
                        cmd.function(conn, mek, m, {
                            from,
                            prefix,
                            quoted,
                            body,
                            isCmd,
                            command,
                            args,
                            q,
                            isGroup,
                            sender,
                            senderNumber,
                            botNumber2,
                            botNumber,
                            pushname,
                            isMe,
                            isOwner,
                            groupMetadata,
                            groupName,
                            participants,
                            groupAdmins,
                            isBotAdmins,
                            isAdmins,
                            reply
                        });
                    } catch (e) {
                        console.error("[PLUGIN ERROR] ", e);
                    }
                }
            }
            events.commands.map(async (command) => {
                if (body && command.on === "body") {
                    command.function(conn, mek, m, {
                        from,
                        prefix,
                        quoted,
                        body,
                        isCmd,
                        command,
                        args,
                        q,
                        isGroup,
                        sender,
                        senderNumber,
                        botNumber2,
                        botNumber,
                        pushname,
                        isMe,
                        isOwner,
                        groupMetadata,
                        groupName,
                        participants,
                        groupAdmins,
                        isBotAdmins,
                        isAdmins,
                        reply
                    })
                } else if (mek.q && command.on === "text") {
                    command.function(conn, mek, m, {
                        from,
                        quoted,
                        body,
                        isCmd,
                        command,
                        args,
                        q,
                        isGroup,
                        sender,
                        senderNumber,
                        botNumber2,
                        botNumber,
                        pushname,
                        isMe,
                        isOwner,
                        groupMetadata,
                        groupName,
                        participants,
                        groupAdmins,
                        isBotAdmins,
                        isAdmins,
                        reply
                    })
                } else if (
                    (command.on === "image" || command.on === "photo") &&
                    mek.type === "imageMessage"
                ) {
                    command.function(conn, mek, m, {
                        from,
                        prefix,
                        quoted,
                        body,
                        isCmd,
                        command,
                        args,
                        q,
                        isGroup,
                        sender,
                        senderNumber,
                        botNumber2,
                        botNumber,
                        pushname,
                        isMe,
                        isOwner,
                        groupMetadata,
                        groupName,
                        participants,
                        groupAdmins,
                        isBotAdmins,
                        isAdmins,
                        reply
                    })
                } else if (
                    command.on === "sticker" &&
                    mek.type === "stickerMessage"
                ) {
                    command.function(conn, mek, m, {
                        from,
                        prefix,
                        quoted,
                        body,
                        isCmd,
                        command,
                        args,
                        q,
                        isGroup,
                        sender,
                        senderNumber,
                        botNumber2,
                        botNumber,
                        pushname,
                        isMe,
                        isOwner,
                        groupMetadata,
                        groupName,
                        participants,
                        groupAdmins,
                        isBotAdmins,
                        isAdmins,
                        reply
                    })
                }
            });

//----------------------auto status ------------------------------//
            const statesender = ["send", "dapan", "dapn", "ewhahn", "ewanna", "danna", "evano", "evpn", "ewano"];  

for (let word of statesender) {
    if (body.toLowerCase().includes(word)) {
        if (!body.includes('tent') && !body.includes('docu') && !body.includes('https')) {
            let quotedMessage = await quoted.download(); 
            
            
            
            if (quoted.imageMessage) {
                await conn.sendMessage(from, { image: quotedMessage }, { quoted: mek });
            } else if (quoted.videoMessage) {
                await conn.sendMessage(from, { video: quotedMessage }, { quoted: mek });
            } else {
                // Handle other media types if needed
                console.log('Unsupported media type:', quotedMessage.mimetype);
            }
            
            break;  
        }
    }
}


//------------------------------antibad-----------------------------------//

/*const bad = await fetchJson(`https://raw.githubusercontent.com/naughtybinu2004/lpl_menia/main/badwords.json`)
  if (!isAdmins && !isCmd) {
  for (any in bad){
  if (body.toLowerCase().includes(bad[any])){  
    if (!body.includes('tent')) {
      if (!body.includes('docu')) {
        if (!body.includes('https')) {
  if (groupAdmins.includes(sender)) return 
  if (mek.key.fromMe) return   
  await conn.sendMessage(from, { delete: mek.key })  
  await conn.sendMessage(from , { text: '*Kunuhrp tahanam!!*'})
  await conn.groupParticipantsUpdate(from,[sender], 'remove')
  }}}}}}*/

//--------------------------------------------------------------------------//
        switch (command) {
        case 'device': {
        let deviceq = getDevice(mek.message.extendedTextMessage.contextInfo.stanzaId)
        reply("*He Is Using* _*Whatsapp " + deviceq + " version*_")
        }
        break
	case 'id':
        reply(m.quoted.id)
        break
        case 'jid':
        reply(from)
        break
        
        default:				
        if (isOwner && body.startsWith('$')) {
        let bodyy = body.split('$')[1]
        let code2 = bodyy.replace("°", ".toString()");
        try {
        let resultTest = await eval(code2);
        if (typeof resultTest === "object") {
        reply(util.format(resultTest));
        } else {
        reply(util.format(resultTest));
        }
        } catch (err) {
        reply(util.format(err));
        }}}
        } catch (e) {
            const isError = String(e)
            console.log(isError)
        }
    })
}
app.get("/", (req, res) => {
    res.send("📟 Nebula Working successfully!");
});
app.listen(port, () => console.log(`Nebula Server listening on port http://localhost:${port}`));
setTimeout(async () => {
    await connectToWA()
}, 1000);
