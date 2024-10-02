module.exports.config = {
        name: "joinNoti",
        eventType: ["log:subscribe"],
        version: "1.0.1",
        credits: "CatalizCS", //fixing ken gusler
        description: "Notify bot or group member with random gif/photo/video",
        dependencies: {
                "fs-extra": "",
                "path": "",
                "pidusage": ""
        }
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

        const path = join(__dirname, "cache", "joinGif");
        if (existsSync(path)) mkdirSync(path, { recursive: true });        

        const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event }) {
        const { join } = global.nodemodule["path"];
        const { threadID } = event;
        if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
                api.changeNickname(`{ ${global.config.PREFIX} } × ${(!global.config.BOTNAME) ? "bot" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
                const fs = require("fs");
                return api.sendMessage("Hello Everyone🙋‍♂️", event.threadID, () => api.sendMessage({body:`🌺AADI🦋🌺 CONNECTED«

Bot Made By AADI BABU☘️
<------------------------------>  
BOT CONNECTED SUCCESFUL !!! 

APPROVAL ALLOW IN THIS GROUP!!!
<------------------------------>

USE HELP TO SEE COMMAND 
\n\nUse ${global.config.PREFIX}help to see commands.\n\nexample :\n${global.config.PREFIX}video7 (video songs)\n${global.config.PREFIX}music (audio songs)\n${global.config.PREFIX}help2 (command list)\n${global.config.PREFIX}info 
<<<<<------------------------------>>>>>
AND FOR ANY REPORT OR CONTACT BOT DEVELOPER

OWNER: आदि

♻️Facebook: 

https://www.facebook.com/bijayani.sahoo.98?mibextid=ZbWKwL

Youtube Site : N/A

☢️ INSTAGRAM: N/A

https://www.instagram.com/aadi_singh__143?igsh=MXVneXZ6bzR4bHhvcg==￼

☣️Email: aadibroken046@gmail.com

⚠️Wp: 9548950035 `, attachment: fs.createReadStream(__dirname + "/cache/botjoin.mp4")} ,threadID));
        }
        else {
                try {
                        const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
                        let { threadName, participantIDs } = await api.getThreadInfo(threadID);

                        const threadData = global.data.threadData.get(parseInt(threadID)) || {};
                        const path = join(__dirname, "cache", "joinGif");
                        const pathGif = join(path, `${threadID}.gif`);

                        var mentions = [], nameArray = [], memLength = [], i = 0;

                        for (id in event.logMessageData.addedParticipants) {
                                const userName = event.logMessageData.addedParticipants[id].fullName;
                                nameArray.push(userName);
                                mentions.push({ tag: userName, id });
                                memLength.push(participantIDs.length - i++);
                        }
                        memLength.sort((a, b) => a - b);

                        (typeof threadData.customJoin == "undefined") ? msg = "𝐖𝐞𝐥𝐜𝐨𝐦𝐞  𝐓𝐨  𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮  𝐁𝐨𝐭 😇● ========================= ●\n● ======= 𝐇𝐄𝐋𝐋𝐎 𝐁𝐀𝐁𝐘 ======= ●\n● ========================= ●\n\n● ===== 🆆 🅴🅻🅻 🅲🅾🅼 🅴 ===== ●\n\n● =========== 𝐍𝐄𝐖 =========== ●\n\n● ===== 🇲‌ 🇪‌ 🇲‌ 🇧‌ 🇪‌ 🇷‌ ===== ●\n\n● ========================= ● [   {name} ]\n\n● ========= 𝗠𝘆 𝗚𝗿𝗼𝘂𝗽 ======== ●\n\n{threadName}\n\n 🥰🖤🌸𝗛𝗮𝗽𝗽𝘆🍀𝗘𝗻𝗷𝗼𝘆🍀—🌸🥀\n\n         🥀𝗠𝗮𝗷𝗲 𝗞𝗮𝗿𝗼🥀\n\n༄✺𝗢𝗿 𝗧𝘂𝗺 𝗜𝘀 𝗚𝗿𝗼𝘂𝗽 𝗞𝗲 {soThanhVien} 𝗠𝗲𝗺𝗯𝗲𝗿 𝗛𝗼 𝗘𝗻𝗷𝗼𝘆 𝗞𝗮𝗿𝗼 𝗠𝗮𝗷𝗲 𝗟𝗼 [ # ]࿐\n\n● ========================= ●\n● ========= 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐓𝐨 ======== ●\n\n☟  ========== ☟ ==========  ☟\n\n=𝐎𝐰𝐧𝐞𝐫 ➻    🌹 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 🌹\n● ========================= ●" : msg = threadData.customJoin;
                        msg = msg
                        .replace(/\{name}/g, nameArray.join(', '))
                        .replace(/\{type}/g, (memLength.length > 1) ?  'You' : 'Friend')
                        .replace(/\{soThanhVien}/g, memLength.join(', '))
                        .replace(/\{threadName}/g, threadName);

                        if (existsSync(path)) mkdirSync(path, { recursive: true });

                        const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

                        if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
                        else if (randomPath.length != 0) {
                                const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
                                formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
                        }
                        else formPush = { body: msg, mentions }

                        return api.sendMessage(formPush, threadID);
                } catch (e) { return console.log(e) };
        }
                    }