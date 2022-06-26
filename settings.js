//════════════(00)═══════════════════════════════════════//
//
//                              K.PRABHASHA
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

global.alivemsg = `My name is RED DRAGON🔥
My Creator is Kumuthu Prabhasha😎` //Costomize Alive Message (type your message in `` )

global.owner = ['+967774217099'] //Owner number in aive msg
global.premium = ['+967774217099'] //Owner Number info
global.ownernomer = '+967774217099' //Owner Number <<<

global.ownername = '😎ميزو حاكم الدمار' //Owner Name
global.botname = '☬بوت ميزو' //Bot Name

global.button = '🤭මේක ටච් කරන්න' //Costomize A Button Name In Alive Message
global.btnurl = '🙂🔥للتواصل واتس معا مالك البوت?😑' //Change Your Button's URL

global.region = 'India, South India, Kerala' //Country Region

global.packname = '☬بوت ميزو  حاكم  الدمار ࿐' //Bot Pacage Name
global.author = '😎ميزو  حاكم  الدمار ❯❯' //Author Name
global.prefa = ['','!','.','😂','❤','💠'] //Command Prefix eg:(.alive ,alive 😂alive)
global.sessionName = 'session' //Session Name!
global.sp = '⭔' //A Charactor In Menu!


global.ig = 'https://github.com/prabhasha2006' //Github Account!
global.footer = '©_Kumuthu.' // DO NOT CHANGE!

global.mess = { // Error Mesages
    success: 'تفعل ✅',
    admin: 'يمكن للمسؤولين فقط استخدامه!😉',
    botAdmin: 'يريد البوت أن يكون مسؤولاً😥',
    owner: 'يمكن للمالك فقط استخدام هذا!😉',
    group: 'الميزة تستخدم فقط للمجموعات!',
    private: 'هذه الميزات فقط للدردشة الخاصة!',
    bot: 'هذه الميزة مخصصة للبوت فقط😝',
    wait: '👉👈يرجى الانتظار...',
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
