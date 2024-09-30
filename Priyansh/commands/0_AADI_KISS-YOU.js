//@Prem-babu3608
////////////////////////////////////////////////////////
/////// WARNING => JO CREDIT NAME CHANGE KREGA USKA ID BAN KAR DIYA JAYEGA + THIS BOT IS MADE BT PREM BABU
const fs = require("fs");
module.exports.config = {
	name: "KISS-YOU",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "PREM BABU", ////////@prem-babu3608
	description: "THIS BOT IS MR PREM SHARMA",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("kiss") ||
     react.includes("kiss you") || react.includes("umma") || react.includes("KISS DO") ||
react.includes("kiss me") ||
react.includes("KISS YOU")) {
		var msg = {
				body: `𝐊𝐈𝐒𝐒 𝐘𝐎𝐔 𝐓𝐎 𝐃𝐀𝐑𝐋𝐈𝐍𝐆 𝐉𝐀𝐋𝐃𝐈 𝐉𝐀𝐋𝐃𝐈 𝐊𝐀𝐑 𝐋𝐎 𝐊𝐎𝐈 𝐃𝐀𝐊𝐇 𝐋𝐄𝐆𝐀 😁 💋🙊💞`,attachment: fs.createReadStream(__dirname + `/noprefix/KK10.png`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💋", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }