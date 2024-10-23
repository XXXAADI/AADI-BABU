const fs = require("fs");
module.exports.config = {
        name: "POPCORN",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "AADI BABU", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "popcorn",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("POPCORN")==0 || event.body.indexOf("popcorn")==0 || event.body.indexOf("Popcorn")==0 || event.body.indexOf("popcon")==0) {
                var msg = {
                                body: "=𝐎𝐰𝐧𝐞𝐫 ➻  𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 \n__________________________________\n\n𝐘𝐚𝐚 𝐋𝐨𝐨 𝐁𝐚𝐁𝐲 𝐏𝐨𝐏𝐜𝐎𝐧\n__________________________________ ",
                                attachment: fs.createReadStream(__dirname + `/noprefix/Pin_by_Marii_Bernardes_on_Netflix_[Video]_|_Food_snapchat,_Food_vids,_Instagram_food(360P).mp4`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍿", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }