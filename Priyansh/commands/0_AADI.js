 const fs = require("fs");
module.exports.config = {
	name: "aadi",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Arun", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 100, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("Owner") ||
     react.includes("OWNER") || 
react.includes("owner")) {
		var msg = {
				body: "𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐓𝐨 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 𝐁𝐨𝐭 😇👈●============================================================●\n\n  =𝐎𝐰𝐧𝐞𝐫 ➻    🌹 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 🌹\n●============================================================●\n𝐅𝐎𝐑 𝐀𝐍𝐘 𝐊𝐈𝐍𝐆 𝐎𝐅𝐅 𝐇𝐄𝐋𝐏 𝐂𝐎𝐍𝐓𝐀𝐂𝐓 𝐎𝐍 𝐈𝐍𝐒𝐓𝐀 𝐈𝐃\n●============================================================● https://www.instagram.com/aadi_singh__143?igsh=MXVneXZ6bzR4bHhvcg==\n●============================================================●\n𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 𝐥𝐢𝐧𝐤 😊 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 :- ☞\n𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 :- ☞ 𝐊𝐀 𝐋𝐔𝐊 😁😋●============================================================●https://www.facebook.com/aadibabu143?mibextid=ZbWKwL`",
				attachment: fs.createReadStream(__dirname + `/noprefix/1725731626536.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("📷", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }