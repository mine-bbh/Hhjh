const config = require('../config')
const { cmd, commands } = require('../command')
const fs = require('fs');
const fileType = require("file-type");
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const path = require('path')
const { tmpdir } = require("os")
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
const Crypto = require("crypto")
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);

async function videoToWebp (media) {

    const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
    const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.mp4`)

    fs.writeFileSync(tmpFileIn, media)

    await new Promise((resolve, reject) => {
        ffmpeg(tmpFileIn)
            .on("error", reject)
            .on("end", () => resolve(true))
            .addOutputOptions([
                "-vcodec",
                "libwebp",
                "-vf",
                "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse",
                "-loop",
                "0",
                "-ss",
                "00:00:00",
                "-t",
                "00:00:05",
                "-preset",
                "default",
                "-an",
                "-vsync",
                "0"
            ])
            .toFormat("webp")
            .save(tmpFileOut)
    })

    const buff = fs.readFileSync(tmpFileOut)
    fs.unlinkSync(tmpFileOut)
    fs.unlinkSync(tmpFileIn)
    return buff
}
var imgmsg = "*Please give me a text !*"
var descg = "it converts a text to gif sticker."
var descdg = "it converts a text to sticker."
cmd({
    pattern: "attp",
    react: "✨",
    alias: ["texttogif"],
    desc: descg,
    category: "convert",
    use: '.attp HI',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return await reply(imgmsg)
let bufff = await getBuffer("https://api-fix.onrender.com/api/maker/attp?text=" + q)
await conn.sendMessage(from, {sticker: await videoToWebp(bufff)}, {quoted: mek })
} catch (e) {
l(e)
}
})

cmd({
    pattern: "attp2",
    react: "✨",
    alias: ["texttogif2"],
    desc: descg,
    category: "convert",
    use: '.attp2 HI',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return await reply(imgmsg)
let bufff = await getBuffer("https://api-brunosobrino-dcaf9040.koyeb.app/api/maker/attp?text=" + q)
await conn.sendMessage(from, {sticker: await videoToWebp(bufff)}, {quoted: mek })
} catch (e) {
l(e)
}
})

cmd({
    pattern: "ttp",
    react: "✨",
    alias: ["t2p","ttpdl"],
    desc: descdg,
    category: "convert",
    use: '.ttp HI',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return await reply(imgmsg)
let bufff = await getBuffer("https://api-fix.onrender.com//api/maker/ttp?text=" + q)
let sticker = new Sticker(bufff, {
    pack: 'Queen Kenzi Md', // The pack name
    author: 'Danupa', // The author name
    type: q.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
    categories: ["🤩", "🎉"], // The sticker category
    id: "12345", // The sticker id
    quality: 75, // The quality of the output file
    background: "transparent", // The sticker background color (only for full stickers)
});
const buffer = await sticker.toBuffer();
return conn.sendMessage(from, {sticker: buffer}, {quoted: mek })
} catch (e) {
l(e)
}
})

