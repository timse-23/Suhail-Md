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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348139576213";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_31_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA2MixcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDksXG4gICAgICAgIDQ0LFxuICAgICAgICAyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA3LFxuICAgICAgICA3OSxcbiAgICAgICAgNzksXG4gICAgICAgIDg1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDc4LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDk5LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTk5LFxuICAgICAgICA5OSxcbiAgICAgICAgMixcbiAgICAgICAgNDcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDUsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNSxcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA2OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDY0LFxuICAgICAgICAxNixcbiAgICAgICAgMjAyLFxuICAgICAgICA4MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjU0LFxuICAgICAgICA0NixcbiAgICAgICAgMTE0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTY1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjUsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQzLFxuICAgICAgICA3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDY1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNixcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgNDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDksXG4gICAgICAgIDY1LFxuICAgICAgICA0OSxcbiAgICAgICAgMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDY3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTc3LFxuICAgICAgICA4OCxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTkyLFxuICAgICAgICA2NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTksXG4gICAgICAgIDE0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTEsXG4gICAgICAgIDE5LFxuICAgICAgICAzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTAwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDk5LFxuICAgICAgICA3NCxcbiAgICAgICAgMjA1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI4LFxuICAgICAgICA0NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzQsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIxLFxuICAgICAgICA4NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDczLFxuICAgICAgICAyNSxcbiAgICAgICAgMTY5LFxuICAgICAgICA4NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZTNObWNRYy9hUncvaFNsMHFMM3RnYUtVNkt0OVlSMXNVUGV2ZXdOZWZFND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMVFyQXM4MkFUY3VQcWljRXMzUHhRZ1wiLFxuICBcInBob25lSWRcIjogXCIyNzI5MzNjYS04ZWQ3LTQ1MGUtYTFkOC04MjUxNjhhYTk5YmRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzksXG4gICAgICAyMzksXG4gICAgICAyNDgsXG4gICAgICAyNTEsXG4gICAgICA1MSxcbiAgICAgIDIwMCxcbiAgICAgIDIzMixcbiAgICAgIDYyLFxuICAgICAgNDAsXG4gICAgICAyNDQsXG4gICAgICAyNDQsXG4gICAgICAxNTAsXG4gICAgICAyMjMsXG4gICAgICAxMDgsXG4gICAgICAyNDQsXG4gICAgICAyMDQsXG4gICAgICA3NCxcbiAgICAgIDIwNCxcbiAgICAgIDIyNyxcbiAgICAgIDExOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjMsXG4gICAgICA4OCxcbiAgICAgIDEzLFxuICAgICAgMjI2LFxuICAgICAgMjUxLFxuICAgICAgMTIxLFxuICAgICAgMjEwLFxuICAgICAgNDAsXG4gICAgICAxMjUsXG4gICAgICAxNjYsXG4gICAgICAxNjgsXG4gICAgICAxOTUsXG4gICAgICAzMixcbiAgICAgIDExLFxuICAgICAgNTMsXG4gICAgICAxODUsXG4gICAgICAxMjAsXG4gICAgICAzNCxcbiAgICAgIDUzLFxuICAgICAgMjM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkRWQTNZQkgxXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTM5NTc2MjEzOjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQ2FuYWRhIFJlbG9jYXRpb24gUGx1Z1wiLFxuICAgIFwibGlkXCI6IFwiMTY3MDYxNzEyMDM2MDQ3OjI2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BPeW81WUZFT0NBeTdVR0dCTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiODhMYkVtcDhWa1Y1TkR1ZTFSSWw1VzVZd2JwVEhyRVZreE5xVWIyZjV3cz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJhN3l0MElwMk5rY0NYZ1czZm83S3h0MERvV3dDa1l5Ukhab0I4NUhoTVBOdUJ0cmhJbXB2c244TEtRQmZpTFlqWGpFVTNvWEhNZ0VRZVZYS1ZGUkhDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJVQyt0d29QSDh5TUU4a0owVC8rSEtvU25MTFcxUW9aNGoxTVpIZENuTHUyT09ONXhNZE5rTkNUUDV1dzRYNFFHQ0JBT1hQVVBJT3R4YXc3Z0hCYWZBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTM5NTc2MjEzOjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjk5MDY5M1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
