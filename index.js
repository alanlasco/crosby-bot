const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const config = require("./config.json");
const Discord = require('discord.js');
client.login(config.Token);

const prefix = "cb/";

client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
 const commandBody = message.content.slice(prefix.length);
 const args = commandBody.split(' ');
 const command = args.shift().toLowerCase();

if(command === "help"){
    message.channel.send(`Hola, mi nombre es Crosby. Soy un bot especializado en Call of Duty Mobile, aunque también tengo funciónes extras. A continuación verás mis comandos.

      -cb/say: Digo lo que quieras.
      -cb/sensibilidad: Te brindo tu sensibilidad ideal.
      -cb/hola: Te saludo.
      -cb/crosby: me presento.


      *Más caracteristicas serán agregadas próximamente*   `);



}




 else if(command === "say"){

   const texto = args.join(' ');
   message.delete(1000);

   message.channel.send(texto);
 }

 else if (command === "crosby") {
   //const Discord = require('discord.js');
 //const attachment = new Discord.MessageAttachment( '/home/alan/Descargas/emoji-3.png');
 const user = message.author;
 message.reply("Si bro, como sabias que me llamo Crosby? <@"+user.id+">");
message.channel.send({
  files: [{
    attachment: '/home/alan/Documentos/crosbyBot/images/si bro.jpg',
    name: 'file.png'
  }]
})}
else if(command === "hola"){
  const user = message.author;
  message.reply("Hola, si? que tengas buen dia <@"+user.id+">");
  message.channel.send({
 files: [{
   attachment: '/home/alan/Documentos/crosbyBot/images/hola.jpg',
   name: 'file.png'
 }]
})
}


 else if (command === "sensibilidad") {
  /*const timeTaken = Date.now() - message.createdTimestamp;
  message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);*/
  message.reply("Hola, Bienvenido al Bot para calcular tu sensibilidad. ");
  message.reply("Introducción: Los jugadores profesionales de videojuegos usan solo un valor fijo para todas sus sensibilidades; ya que el juego acomoda cada sensibilidad en relación con el Zoom provisto por cada mira teniendo en cuenta solo la sensibilidad estándar. Esto en call of duty mobile es inexistente por eso, te brindaré una sensibilidad ideal para ti, para que puedas ser consistente y que le resulte más fácil a tu memoria muscular acostumbrarse a cada una de las sensibilidades   ");
  message.reply(`Instrucciones:
 *Primero, en el menú del juego seleccionarás el modo de velocidad fija(Muy importante).
 *Segundo, en configuraciones basicas el FOV lo pondras en 75
 *Tercero, entrarás en una sala de entrenamiento, o una partida casual.
 Ahora necesitarás encontrar una sensibilidad de cámara en la cual puedas hacer un giro 180° con un simple desliz de tu dedo(una simple vuelta hacia atrás).
*Por ultimo, una vez que lo hayas conseguido ingresa el comando CB/ seguido del número. Ejemplo !120`)


}else if(command != "Sensibilidad" ){
  var entero = parseInt(command);
  if( entero <= 300){
  const ads = 1.24;
  const tac = 1.65;
  const sniper = 0.75;
  var resultado = entero * ads;
  resultado = Math.trunc(resultado);
  message.reply("Su sensibilidad de mira es: "+resultado);

  var resultado = entero * tac;
  resultado = Math.trunc(resultado);
  message.reply("Su sensibilidad de mira tactica es: "+resultado);
  var resultado = entero * sniper;
  resultado = Math.trunc(resultado);
  message.reply("Su sensibilidad de mira de sniper es: "+resultado);}
  else{message.reply("usted ingreso un numero muy grande o un comando inexistente")}
}




});
