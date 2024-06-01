const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "245102013";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_10_06_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM4LFxuICAgICAgICA4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODUsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjM4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTU4LFxuICAgICAgICA0MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzksXG4gICAgICAgIDc5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMwLFxuICAgICAgICA5MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDgyLFxuICAgICAgICAyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjE1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjMwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDMwLFxuICAgICAgICA0LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxODcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY0LFxuICAgICAgICA2NixcbiAgICAgICAgNzgsXG4gICAgICAgIDgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDUxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDg2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjUzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTcsXG4gICAgICAgIDIyLFxuICAgICAgICAxODYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyLFxuICAgICAgICAyMixcbiAgICAgICAgMjgsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTExLFxuICAgICAgICA0MCxcbiAgICAgICAgMTY4LFxuICAgICAgICA4NixcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDk1LFxuICAgICAgICA2OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1LFxuICAgICAgICA4OSxcbiAgICAgICAgNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjksXG4gICAgICAgIDk4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjMyLFxuICAgICAgICA1NixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDc3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzcsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjEzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxLFxuICAgICAgICAxLFxuICAgICAgICAxMzksXG4gICAgICAgIDIwNCxcbiAgICAgICAgODIsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDExOSxcbiAgICAgICAgODksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzksXG4gICAgICAgIDYzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDU2LFxuICAgICAgICAxODUsXG4gICAgICAgIDI2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzksXG4gICAgICAgIDg1LFxuICAgICAgICAzMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA3LFxuICAgICAgICA4MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgODAsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDgyLFxuICAgICAgICA2MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTY5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSU9BVlcrQlN0ak15U2Zyb1RId0t3N0pBUEZyWTRlYWN6QTY1ajJ2Qm81RT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidGRuOGZ3WnJTSUN4MmNqU25KMElLQVwiLFxuICBcInBob25lSWRcIjogXCIwN2ZjMzRhZC0xODVhLTQxODctOTcwOS1iZjI1MjI4ZGVkNDhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTYsXG4gICAgICAxMTMsXG4gICAgICA5NSxcbiAgICAgIDIxOCxcbiAgICAgIDkxLFxuICAgICAgNzgsXG4gICAgICAyNCxcbiAgICAgIDEzMSxcbiAgICAgIDIwMixcbiAgICAgIDE1MixcbiAgICAgIDE0LFxuICAgICAgMTQ2LFxuICAgICAgMTg5LFxuICAgICAgMTkwLFxuICAgICAgMjA1LFxuICAgICAgNDksXG4gICAgICA1OCxcbiAgICAgIDU5LFxuICAgICAgMTAsXG4gICAgICAyNTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIzLFxuICAgICAgNjYsXG4gICAgICAyNDQsXG4gICAgICA1NixcbiAgICAgIDg1LFxuICAgICAgODYsXG4gICAgICAyMDYsXG4gICAgICAxMzcsXG4gICAgICA2NyxcbiAgICAgIDY5LFxuICAgICAgMjI5LFxuICAgICAgMTE4LFxuICAgICAgMTA5LFxuICAgICAgMTI5LFxuICAgICAgMjEzLFxuICAgICAgMTk1LFxuICAgICAgNDgsXG4gICAgICAxNzYsXG4gICAgICAzOCxcbiAgICAgIDE3NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGTUxHNTkyUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzMjQ1MTAyMDEzOjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiUmF0aW9uYWwgSHViXCIsXG4gICAgXCJsaWRcIjogXCIxNzY2OTk0MTczMjE2Mjg6MTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWZoNEtrT0VLcWk2cklHR0FvZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJxMmJORkNCdjliREVUZk1oTmdNZjdrcWh5UlRURWZUUEpqZm5hQXhkaEI4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIllYamQ4dWJGZlduQXVWMkMvald1Ymp2N1RaOVlxYUNzYVBUVHl1TWF1eXNCcXNkMmNpTmM0VlU3cnMyc1BBWWZFNzFNRUNYMS9kMDJWU3BJeGZvcWpRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImdLZXNxNDh0NHAyZDRRUlBHcThYbEdXZktFTkhXUTUrNUFyY2ZpV1B6cUNCQjVEamNxVFpwVDE0ZG94ODJPUG9ycHp1M2V4SUcrZHJnclA3UzQrNUN3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzI0NTEwMjAxMzoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAzMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3MjExNDM4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQXdXXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBd1cuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJsSkl6WDNBK1FMekl5WGw3NkFlTWRYRGFiZUc1V1lQZmlhYUxDS0NRUUJ3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM4NDU2NjQ5MDMsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlsyLDQsNSwxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcxNDQ0ODczNjUyOVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
