//════════════(00)═══════════════════════════════════════//
//
//          RED DRAGON v5.0
//
//════════════(00)════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\

global.alivemsg = `👋🏻𝙷𝚒! 𝙸 𝚊𝚖 𝙾𝚗𝚕𝚒𝚗𝚎 𝙽𝚘𝚠👋🏻

🎃 𝙸  𝚊𝚖 𝚂𝚊𝚌𝚑𝚒𝚢𝚊 𝚊𝚗 𝚞𝚜𝚎𝚛 𝚋𝚘𝚝 𝙵𝚘𝚛 𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙 🎃

🥰 𝙷𝚊𝚟𝚎 𝚊 𝚗𝚒𝚌𝚎 𝚍𝚊𝚢! 🥰` //Costomize Alive Message (type your message in `` )

global.owner = ['+94764526054'] //Owner number in aive msg
global.premium = ['+94764526054'] //Owner Number info
global.ownernomer = ['+94764526054'] //Owner Number <<<

global.ownername = '😎𝐌𝐑.𝐒𝐀𝐂𝐇𝐈𝐘𝐀😎' //Owner Name
global.botname = '✿ᴍʀ.ꜱᴀᴄʜɪʏᴀ ʙᴏᴛ✿' //Bot Name

global.button = '🤭Touch this📍' //Costomize A Button Name In Alive Message
global.btnurl = '🙂🔥දැන් සැපද?😑' //Change Your Button's URL

global.region = 'India, South India, Kerala' //Country Region

global.packname = '𝐌𝐑.𝐒𝐀𝐂𝐇𝐈𝐘𝐀' //Bot Pacage Name
global.author = '😎𝐌𝐑.𝐒𝐀𝐂𝐇𝐈𝐘𝐀❯❯' //Author Name
global.prefa = ['','!','.','😂','❤','💠'] //Command Prefix eg:(.alive ,alive 😂alive)
global.sessionName = '𝐌𝐑.𝐒𝐀𝐂𝐇𝐈𝐘𝐀' //Session Name!
global.sp = '⭔' //A Charactor In Menu!
global.footer = '© ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍʀ.ꜱᴀᴄʜɪʏᴀ.' //In list menu
global.chatbotpre false  // Chat bot true/false


global.ig = 'https://www.youtube.com/channel/UC2FkdjIyfmzaxBv39lC0ryg' //Github Account!

global.mess = { // Error Mesages
    success: 'Done ✓🌹⃝⃘̉̉̉̉̉̉🧚',
    admin: 'This Feature Is Only For Admin!✾ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬✾➣',
    botAdmin: 'Bot Must Be Admin First!❤️⃟✦⃝̮̮̮̯̯̯😌',
    owner: 'This Feature Is Only For Owner😯⃟💦᭄᭄̊̊̊̊࿔!',
    group: 'Feature Used Only For Groups!😒⃝⃟ꦾ👌ꦿ',
    private: 'Features Used Only For Private Chat😯⃟💦᭄᭄̊̊̊̊࿔!',
    bot: 'This Feature Is Only For Bot❤️⃝➤⃟̱̱̱̱̄̄̄̄😢',
    wait: 'Wait A minute...🦋⃝❉⃟࿔ꦿ',
    error: 'Error! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
// DO NOT CHANGE \\
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./DragonMedia/image/red-_-dragon-kumuthu.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
