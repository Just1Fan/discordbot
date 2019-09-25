const Discord = require('discord.js')

;
 const client = new Discord.Client();

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });





//place this at the bottem of the code (just my suggestion)
client.login('TOKEN');
