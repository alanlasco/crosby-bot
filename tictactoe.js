const { tictactoe } = require('reconlx')


module.exports = {
  name : 'tictactoe',
  run : async(Client, message, args) => {
    const member = message.mentions.members.first()
      if(!member) resturn message.channel.send('Por favor especifica el jugador')


      new tictactoe({
        player_two: member,
        message: message

      })

  }

}
