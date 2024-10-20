module.exports.config = {
  name: "Maavideo",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "AADI BABU",
  description: "MAA STATUS VEDIO",
  commandCategory: "MAA STATUS VIDEO",
  usages: "Maa video",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["☟  ========== ☟ ==========  ☟                                                         ●===========================●                              𝐎𝐰𝐧𝐞𝐫 ➻  ────  𝐀𝐚̃𝐃𝐢   𝐁𝐚𝐁𝐮"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [

  "https://drive.google.com/file/d/12r3tscaHSoQMIZN2yX8vwq4wLliEn4i-/view?usp=drivesdk","https://drive.google.com/file/d/12V7BzDPwZsFDDMvsJIXqMwjFSlwl9o3i/view?usp=drivesdk","https://drive.google.com/file/d/12Zz87BKpQiX3l6jMbfoxmSLa4vC8ir7I/view?usp=drivesdk","https://drive.google.com/file/d/12abi9cnGBqAmNVrg51gLuwCLS_Y5bi9i/view?usp=drivesdk","https://drive.google.com/file/d/12dYThShVRrUx14X16J10wOdaICpoPp-7/view?usp=drivesdk","https://drive.google.com/file/d/13KDmoWOZWCuWAkD1WJ5fgTF4rjcpbEmK/view?usp=drivesdk"
];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
