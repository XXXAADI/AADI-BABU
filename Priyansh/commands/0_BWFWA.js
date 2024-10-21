const request = require('request');
const fs = require('fs');
const path = require('path');

module.exports.config = {
    name: "bewafa",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "SHANKAR SUMAN",
    description: "no prefix",
    usePrefix: false,
    commandCategory: "No command marks needed",
    usages: "Yo Yo",
    cooldowns: 5,
};

const gif = "https://i.imgur.com/waloxgf.jpeg";
const message = "● ======= 𝐇𝐄𝐋𝐋𝐎 𝐁𝐀𝐁𝐘 ======= ●                                                          ☟  ========== ☟ ==========  ☟.                                                         ●============================●                              𝐎𝐰𝐧𝐞𝐫 ➻  ────  𝐀𝐚̃𝐃𝐢   𝐁𝐚𝐁𝐮                                ●============================● 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 𝐥𝐢𝐧𝐤 😊👈 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 :- ☞ https://www.facebook.com/profile.php?id=61567051296122&mibextid=ZbWKwL";

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
    var { threadID, messageID } = event;
    const lowerCaseMessage = event.body.toLowerCase();

    if (lowerCaseMessage.startsWith("@Ɓɘwʌʆʌ Boɭtīī Pʋbɭīīɕ ") || 
        lowerCaseMessage.startsWith("Ɓɘwʌʆʌ Boɭtīī Pʋbɭīīɕ ") || 
        lowerCaseMessage.startsWith("Befwa")) { 

        const downloadPath = path.join(__dirname, 'bewafa-Jpg-Images.jpg');

        // Download image from Imgur
        request(gif).pipe(fs.createWriteStream(downloadPath)).on('close', () => {
            var msg = {
                body: message,
                attachment: fs.createReadStream(downloadPath)
            };
            api.sendMessage(msg, threadID, messageID);
            api.setMessageReaction("😘", event.messageID, (err) => {}, true);
        });
    }
}

module.exports.run = function({ api, event, client, __GLOBAL }) {

}