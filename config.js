const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94705248517";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_07_10_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDY5LFxuICAgICAgICA5MixcbiAgICAgICAgODcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjAzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTEzLFxuICAgICAgICA5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjksXG4gICAgICAgIDc2LFxuICAgICAgICA1OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDk2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTkxLFxuICAgICAgICA4OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDAsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTksXG4gICAgICAgIDI3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDk3LFxuICAgICAgICAyMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDQxLFxuICAgICAgICAxODUsXG4gICAgICAgIDQ5LFxuICAgICAgICA2NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjI2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTgwLFxuICAgICAgICA0NixcbiAgICAgICAgNzgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMzcsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI2LFxuICAgICAgICAyMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDgyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTU0LFxuICAgICAgICA2MixcbiAgICAgICAgMjMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTksXG4gICAgICAgIDMsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzksXG4gICAgICAgIDc0LFxuICAgICAgICA2NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDgyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTY3LFxuICAgICAgICA2OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDYwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk5LFxuICAgICAgICAzNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDQ3LFxuICAgICAgICAzMixcbiAgICAgICAgMTU2LFxuICAgICAgICAxODgsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDM4LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODUsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTA3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTc4LFxuICAgICAgICA0MixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjA3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI2LFxuICAgICAgICA0MixcbiAgICAgICAgMjE5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDkyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQW4xZFVyQ2QzcU9td0ZzSVJZcWhuakdpL2RPZEh1bENNYWs0NnA0Mko5Yz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc4NzU3OTA2OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRkNCNjlENzg4Njg1NjlBRUZGNzU2NDc5RjQxNDQxQzlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI4MTUxNjMzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3ODc1NzkwNjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjcxOTQ3QzM1NkYxOUFFMEE5RDk5MTA0QTI4OEI0QUM5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyODE1MTYzM1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0Nzg3NTc5MDY4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQjhEOUZBNzY3RDY3OEQ1MTdDMjQxQTQ0MzM5MEZGMlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjgxNTE2MzVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc4NzU3OTA2OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTQ2MTBFNENFOThBODMzNERFMkRCNDIxQjBEMEI4NEFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI4MTUxNjM2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIl9FbC1keERhUmpXVFRmY3B3U21XSmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWU4ZDIzZjQtNzIxYS00ZGMzLWJkY2UtOWEyOTFjZWQ3ZTczXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY5LFxuICAgICAgMTcwLFxuICAgICAgMjE1LFxuICAgICAgNTEsXG4gICAgICAyMSxcbiAgICAgIDE1NCxcbiAgICAgIDE3MixcbiAgICAgIDE3MSxcbiAgICAgIDE1OCxcbiAgICAgIDMxLFxuICAgICAgMTE4LFxuICAgICAgMTg1LFxuICAgICAgMyxcbiAgICAgIDIwMSxcbiAgICAgIDIxOCxcbiAgICAgIDEyNSxcbiAgICAgIDE3NyxcbiAgICAgIDE2NSxcbiAgICAgIDEzLFxuICAgICAgMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTMsXG4gICAgICA0MCxcbiAgICAgIDEwNixcbiAgICAgIDk3LFxuICAgICAgMTg0LFxuICAgICAgMTAxLFxuICAgICAgNzYsXG4gICAgICAxOTMsXG4gICAgICA4NixcbiAgICAgIDEyOSxcbiAgICAgIDE5MixcbiAgICAgIDE2OSxcbiAgICAgIDE2OSxcbiAgICAgIDI0OCxcbiAgICAgIDE3OSxcbiAgICAgIDcyLFxuICAgICAgMjQyLFxuICAgICAgMTg0LFxuICAgICAgNTgsXG4gICAgICA2MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJHUFpUM0o0TFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3ODc1NzkwNjg6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI5NzM4ODA2NjA0MDI5OjE3QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkJvdFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xISzIwc1F6SUNHdUFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieXB5YmJXUGFaU1BqcmNOamllTTVHRmloZXVTM0hhM2ZQSUVXaEZIbGFSST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJIeDBKK0ZreXM5WW5RdzYwV0VGeXBZbG9DL2lhQXU4am9NczF6SjlIZXpwUFRySzJqVWtaMzhuTEdBcDZmRllvVGpoYTdSQ2lIUEVzbnZ4M0RLQllDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ6RXpzbTlPeUVQZkFndlpkMnhBYWlEUVdVMnlWSytwUGZsYlZ6SzN5ZHRCaXJSSXJ1T1JNV3hPNkVLT1dOdzBSMitEaWpGU3pPVlM3MnJwMndTZHNqdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc4NzU3OTA2ODoxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjgxNTE2MzEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJc0hcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlzSC5qc29uIjogIntcImtleURhdGFcIjpcInJYcHhBSStSWHlxVnBscjZhQklpa09DLytzZFgvNWd1eG8xdFdnVEErdGc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU4Nzg2ODY1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjgxNTE2MzExNjhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
