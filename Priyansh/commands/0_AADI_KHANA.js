const fs = require("fs");
module.exports.config = {
	name: "KHANA",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "AADI BABU",
	description: "THIS BOT IS MR AADI SHARMA",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("KHANA") ||
     react.includes("khana") || react.includes("thana") || react.includes("खाना") ||
react.includes("kuch khaya") ||
react.includes("kha lo")) {
		var msg = {
				body: `☟  ========== ☟ ==========  ☟                                                         ●===========================●                              𝐎𝐰𝐧𝐞𝐫 ➻  ────  𝐀𝐚̃𝐃𝐢   𝐁𝐚𝐁𝐮    𝐋𝐨 𝐁𝐚𝐁𝐲 😘`,attachment: fs.createReadStream(__dirname + `/noprefix/AA2.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍲", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }