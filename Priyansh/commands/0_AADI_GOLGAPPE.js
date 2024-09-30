const fs = require("fs");
module.exports.config = {
	name: "GOLGAPPE",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "sub",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Golgappe")==0 || event.body.indexOf("Golgappa")==0 || event.body.indexOf("Pani puri")==0 || event.body.indexOf("PANI PURI")==0) {
		var msg = {
				body: "😋 𝐘𝐀 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐆𝐎𝐋𝐆𝐀𝐏𝐏𝐀 𝐊𝐇𝐀𝐎 😋",
				attachment: fs.createReadStream(__dirname + `/AADI/AADI3.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😋", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }