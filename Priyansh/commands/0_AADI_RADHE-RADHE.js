//@Prem-babu3608
////////////////////////////////////////////////////////
/////// WARNING => JO CREDIT NAME CHANGE KREGA USKA ID BAN KAR DIYA JAYEGA + THIS BOT IS MADE BT PREM BABU
const fs = require("fs");
module.exports.config = {
        name: "Radha",
    version: "1.1.1",
        hasPermssion: 0,
        credits: "PREM BABU", //////@prem-babu3608
        description: "THIS BOT IS MR PREM SHARMA",
        commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        let react = event.body.toLowerCase();
        if(react.includes("radhe radhe") ||
     react.includes("RADHE RADHE") || react.includes("Radhe Radhe") || react.includes("राधे राधे") ||
react.includes("Radhe") ||
react.includes("RADHE")) {
                var msg = {
                                body: `__🥰  𝐌𝐀𝐈𝐍 𝐓𝐎 𝐑𝐀𝐃𝐇𝐀 𝐑𝐀𝐍𝐈 𝐊𝐀 𝐃𝐄𝐄𝐖𝐀𝐍𝐀 𝐇𝐔 𝐏𝐘𝐀𝐑 𝐒𝐄 𝐁𝐎𝐋𝐎 𝐑𝐀𝐃𝐇𝐄 𝐑𝐀𝐃𝐇𝐄 😍 ❤️`,attachment: fs.createReadStream(__dirname + `/noprefix/XX.jpg`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥀", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

  }