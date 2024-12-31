//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348109243618";
global.sudo = process.env.SUDO || "2349112171078,2348109243618,2349012640680";
global.owner = process.env.OWNER_NUMBER || "2348109243618";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUJnVEV1TTBwRlBpM2N2T3BxalVXc3V4Y0E4Nm8wbDBHNGtUY05XYm9sWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVEJmQjdnWlVWM1E5bE9Yc1JkNHZJQ2VlZmhBRGJ6ck9KVkl6T25Ec3hVbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTUHY2NlJDcUVRU1djdnJQOVg2bjUreDYyMTBPNEprb0Fhd204ZE5OVkhnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRWnhzb0NlTjVra1NuSHd3V3BlbnNSNFNWYW4wQUhDZ3JqeWVxSDJickN3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndCWDhPZDIxMmhNdmU4aXF5OUdHOEFuY1FDUDBwa1l4b0kwNzJkVjdtR0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJjL3ZvV3BDaDQxL0t4d0UvM2VBQmpjNkRGbE0zbnoyd0Y2d1dqUTBCaG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMklpQW5mR1Z2ZU1zSGVYMHJuS2QxUjNXOVAwTmZiSmY0cnI0KzEwQ3RVUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidTZWUnJ2L29HVnpvQ3ZwSjJraVdabnZGRVE4emlTVmxOTFRteGFkbVR4dz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRaaWw3SG9IdC9mUmJ1NGVBemh6WmxhVHI4UUpmdWUyc0ZLdVZTSDdSbE1SNVBLckpTU0c2V1ArV0hKa2xuSUo2OHRSRDRGeW00ZnAxVHZib3FHcWlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ1LCJhZHZTZWNyZXRLZXkiOiJyU2ppM2NaVEtXclZPcUh2V0VuY2NleEtDSlZKcXRqcEo5SWhlSnFjRDRRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkxMzU3MDk3NDJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTkxNEY4NkE5NjBERTg3NzA4RDdGOUFFQjVGNUIwMTUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczNTY0OTU3MH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiWFM2eFBIdDZRSXVwQWE3MWJBdEhZUSIsInBob25lSWQiOiJlZjkzYzBjZS04NjdlLTRkN2EtOGVjOC1iZDdlOWVjYjUwNzEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRFpXeXNwRzZXUHZDUjduUmd4aWtuY3hsek1jPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRIb2ZHK0tCUHFldUY0R2hlZjBJVFlVb3NScz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJXWTVZRk1TMSIsIm1lIjp7ImlkIjoiMjM0OTEzNTcwOTc0MjozN0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLhjqIgyaog4bSbIOG0gCDJtOS6lyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTkRJbG4wUWo5TFB1d1lZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiekhTdmVUalN5Q21aTUpGVFdRVEhxYitFSUlZdWphSEl1aWpVbTZlSGQzbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiKzN3eGJseS9INldMcUlQUW1WdG95S2N4N2l3aGtNdFpQSGx4bmp5Y3c5a3hqZUxGcXllamlBUVhQcS9xYkFxc2hwUHo0U0hGZ2dlbHl0ZmcvTFdBRFE9PSIsImRldmljZVNpZ25hdHVyZSI6Ik55MDBjVUhWMkRXeEpCK0tiUmlYQktoSlZYQ1BuVkhyQkRzMzJWa05wZFB6K2g0T29MeDE5M21SMW1GVS9RbTNWMGVJQ3c5T3M1cXNLL24yU01pbmdBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTEzNTcwOTc0MjozN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjeDByM2s0MHNncG1UQ1JVMWtFeDZtL2hDQ0dMbzJoeUxvbzFKdW5oM2Q2In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM1NjQ5NTY1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUhYTiJ9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
