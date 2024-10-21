module.exports.config = {
	name: "restart",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "manhIT",
	description: "Restart the Bot",
	commandCategory: "Admin",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
	const { threadID, messageID } = event;
	return api.sendMessage(`𝐁𝐎𝐓 𝐈𝐒 𝐑𝐄𝐒𝐓𝐒𝐓  🤖 👈 ●============================================================●𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐓𝐨 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 𝐁𝐨𝐭 😇👈
=𝐎𝐰𝐧𝐞𝐫 ➻    🌹 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 🌹
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 𝐥𝐢𝐧𝐤 😊 👈👈👈👈👈 ____________𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 :- ☞ https://www.facebook.com/profile.php?id=100066401546757&mibextid=ZbWKwL
●============================================================● 𝐁𝐎𝐓 𝐑𝐄𝐒𝐓𝐒𝐓 𝐇𝐎 𝐑𝐄𝐇𝐀 𝐇𝐀𝐈 𝐏𝐋𝐙 𝐖𝐀𝐈𝐓`, threadID, () => process.exit(1));
}