const fs = require("fs");
module.exports.config = {
	name: "nasta",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "FAIZ ANSARI", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "nasta",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("BREAKFAST")==0 || event.body.indexOf("Nasta")==0 || event.body.indexOf("NASTA")==0 || event.body.indexOf("barekfast")==0) {
		var msg = {
				body: "☟  ========== ☟ ==========  ☟                                                         ●===========================●                              𝐎𝐰𝐧𝐞𝐫 ➻  ────  𝐀𝐚̃𝐃𝐢   𝐁𝐚𝐁𝐮   😋 𝐀𝐀𝐎 𝐁𝐀𝐁𝐘 𝐌𝐄𝐑𝐄 𝐒𝐀𝐓𝐇 𝐍𝐀𝐒𝐓𝐀 𝐊𝐑 𝐋𝐎 🙂",
				attachment: fs.createReadStream(__dirname + `/noprefix/nasta.png`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😋", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

        }