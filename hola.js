const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const config = require("./config.json");
client.login(config.Token);
export function hola (){
const user = message.author;
message.reply("Hola, si? que tengas buen dia <@"+user.id+">");
message.channel.send({
files: [{
 attachment: '/home/alan/Documentos/crosbyBot/images/hola.jpg',
 name: 'file.png'
}]
})
}
