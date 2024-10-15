const request = require('request');
const fs = require('fs');
const path = require('path');

module.exports.config = {
		name: "Boss",
		version: "1.0.1",
		hasPermssion: 0,
		credits: "BABU",
		description: "no prefix",
	usePrefix: false,
		commandCategory: "No command marks needed",
		usages: "Yo Yo",
		cooldowns: 5,
};

const gifs = [
		"https://i.imgur.com/aVKNL0y.jpeg",
		"https://i.imgur.com/8fIaObC.jpeg",
		"https://i.imgur.com/I9cM0yI.jpeg",
		"https://i.imgur.com/WxJyNrf.jpeg",
		"https://i.imgur.com/BJrkdEB.jpeg"
];

const messages = [
		"=𝐎𝐰𝐧𝐞𝐫  ➻       𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮  ●============================================================● 𝐖𝐞𝐥𝐜𝐨𝐦𝐞  𝐓𝐨 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 𝐁𝐨𝐭",
		"=𝐎𝐰𝐧𝐞𝐫  ➻       𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮  ●============================================================● 𝐖𝐞𝐥𝐜𝐨𝐦𝐞  𝐓𝐨 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 𝐁𝐨𝐭",
		"=𝐎𝐰𝐧𝐞𝐫  ➻       𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮  ●============================================================● 𝐖𝐞𝐥𝐜𝐨𝐦𝐞  𝐓𝐨 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 𝐁𝐨𝐭",
		"=𝐎𝐰𝐧𝐞𝐫  ➻       𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮  ●============================================================● 𝐖𝐞𝐥𝐜𝐨𝐦𝐞  𝐓𝐨 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 𝐁𝐨𝐭",
		"=𝐎𝐰𝐧𝐞𝐫  ➻       𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮  ●============================================================● 𝐖𝐞𝐥𝐜𝐨𝐦𝐞  𝐓𝐨 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 𝐁𝐨𝐭",
		"=𝐎𝐰𝐧𝐞𝐫  ➻       𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮  ●============================================================● 𝐖𝐞𝐥𝐜𝐨𝐦𝐞  𝐓𝐨 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 𝐁𝐨𝐭"
];

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
		var { threadID, messageID } = event;
		var name = await Users.getNameUser(event.senderID);

		if (event.body.toLowerCase().startsWith("आदि बाबू") || 
				event.body.toLowerCase().startsWith("आदि") || 
				event.body.toLowerCase().startsWith("Aadi") || 
				event.body.toLowerCase().startsWith("aadi") || 
				event.body.toLowerCase().startsWith("AADI")) { 

				// Select random GIF and message
				const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
				const randomMessage = messages[Math.floor(Math.random() * messages.length)].replace("{name}", name);
				const downloadPath = path.join(__dirname, 'Good-Morning-Gif-Images.gif');

				// Download image from Imgur
				request(randomGif).pipe(fs.createWriteStream(downloadPath)).on('close', () => {
						var msg = {
								body: randomMessage,
								attachment: fs.createReadStream(downloadPath)
						};
						api.sendMessage(msg, threadID, messageID);
						api.setMessageReaction("😘", event.messageID, (err) => {}, true);
				});
		}
}

module.exports.run = function({ api, event, client, __GLOBAL }) {

}