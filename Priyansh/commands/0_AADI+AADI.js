module.exports.config = {
  name: "AadI",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "AADI BABU",
  description: "THIS BOT IS MADE BY AADI BABU",
  commandCategory: "AADI BABU IMAGE",
  usages: "AADI-BABU",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["boss"];
const request = global.nodemodule["Aadi"];
const fs = global.nodemodule["aadi"];
    var link = [
"https://i.imgur.com/I9cM0yI.jpeg",
"https://i.imgur.com/8fIaObC.jpeg",
"https://i.imgur.com/WxJyNrf.jpeg",
"https://i.imgur.com/1MrF4bm.jpeg",
"https://i.imgur.com/BJrkdEB.jpeg",
"https://i.imgur.com/aVKNL0y.jpeg"
     ];
     var callback = () => api.sendMessage({body:`┏━━━━━┓\n     प्रेम-बाबू                    ✧═══•❁😛❁•═══✧\n┗━━━━━┛\n\nदेख लो मेरे बॉस प्रेम बाबू को सबसे अलग मासूम चेहरा भोली सी सूरत आखों में प्यार दिल में खुमार ♥️`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };