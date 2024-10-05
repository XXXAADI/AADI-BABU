let messageCounts = {}; 
const spamThreshold = 25; 
const spamInterval = 60000; 

module.exports.config = {
	name: "spamleave",
	version: "1.0.0",
	hasPermission: 1,
	credits: "SHANKAR SUMAN",
	description: "Automatically detect and act on spam",
	usePrefix: "true",
	commandCategory: "admin",
	usages: "",
	cooldowns: 5,
};

module.exports.run = function({ api, event, args }) {
	api.sendMessage("This command functionality will trigger when the user spams in group chats", event.threadID, event.messageID);
}; 

module.exports.handleEvent = function({ api, event }) {
	const { threadID, messageID, senderID } = event;

	if (!messageCounts[threadID]) {
		messageCounts[threadID] = {};
	}

	if (!messageCounts[threadID][senderID]) {
		messageCounts[threadID][senderID] = {
			count: 1,
			timer: setTimeout(() => {
				delete messageCounts[threadID][senderID];
			}, spamInterval)
		};
	} else {
		messageCounts[threadID][senderID].count++;
		if (messageCounts[threadID][senderID].count > spamThreshold) {
			api.sendMessage("🛡️ | Detected spamming. The bot will now leave the group.", threadID, messageID);
			
			// Bot will leave the group
			api.removeUserFromGroup(api.getCurrentUserID(), threadID);
		}
	}
};