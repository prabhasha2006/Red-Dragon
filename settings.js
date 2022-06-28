//════════════(00)═══════════════════════════════════════//
//
//                              Elgazar Alwazer
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 
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

global.alivemsg = `My name is elgazar alwazer🔥
My Creator is Kumuthu Prabhasha😎` //Costomize Alive Message (type your message in `` )

global.owner = ['+201098906252'] //رقم المالك في الرسالة الحية
global.premium = ['+201098906252'] //معلومات رقم المالك
global.ownernomer = '+201098906252' //رقم المالك <<<

global.ownername = '😎𝑬𝑳𝑮𝑨𝒁𝑨𝑹 𝑨𝑳𝑾𝑨𝒁𝑬𝑹' //ownername
global.botname = ' ☬𝑬𝑳𝑮𝑨𝒁𝑨𝑹༒𝑩𝑶𝑻' //botname

global.button = '🤭මේක ටච් කරන්න📍' //Costomize A Button Name In Alive Message
global.btnurl = '🙂🔥දැන් සැපද?😑' //Change Your Button's URL

global.region = 'India, South India, Kerala' //Country Region

global.packname = 'الجزار الوزير يروحي💕' //Bot Pacage Name
global.author = 'تع يحبي خد الباقي◐01098906252◐' //Author Name
global.prefa = ['','!','.','😂','❤','💠'] //Command Prefix eg:(.alive ,alive 😂alive)
global.sessionName = 'session' //Session Name!
global.sp = '⭔' //A Charactor In Menu!


global.ig = 'https://github.com/prabhasha2006' //Github Account!
global.footer = '©_Kumuthu.' // DO NOT CHANGE!

global.mess = { // Error Mesages
    success: 'تم التفعيل ✅',
    admin: 'يمكن للمسؤولين فقط استخدامه!😉',
    botAdmin: 'البوت يريد ان يكون مشرفا😥',
    owner: 'يمكن للمالك فقط استخدام هذا!😉',
    group: 'الميزة تستخدم فقط للمجموعات!',
    private: 'هذه الميزات فقط للدردشة الخاصة!',
    bot: 'هذه الميزة مخصصة للبوت فقط😝',
    wait: '👉👈أرجو الإنتظار...',
    error: 'Error!!! Maybe Api Key Is Expired🤔!',
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
