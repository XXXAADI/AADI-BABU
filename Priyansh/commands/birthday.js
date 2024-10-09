module.exports.config = {

 name: "birthday",

 version: "1.0.0",

 hasPermssion: 0,

 credits: "Mr Chand",

 description: "",

 commandCategory: "0",

 cooldowns: 5

}



module.exports.run = function ({ event, api }) {

    const t = Date.parse("March 15, 2023 00:00:00") - Date.parse(new Date());

    const seconds = Math.floor( (t/1000) % 60 );

    const minutes = Math.floor( (t/1000/60) % 60 );

    const hours = Math.floor( (t/(1000*60*60)) % 24 );

    const days = Math.floor( t/(1000*60*60*24) );



    return api.sendMessage(`𝐂𝐇𝐀𝐍𝐃 𝐊𝐈 𝐁𝐈𝐑𝐓𝐇𝐃𝐀𝐘 𝐌𝐀𝐈𝐍 𝐉𝐔𝐒𝐓\n» ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds« 𝐑𝐇𝐓𝐀 𝐇𝐀𝐈`, event.threadID, event.messageID);

}