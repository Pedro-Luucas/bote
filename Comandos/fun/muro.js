const Discord = require("discord.js")

let muro = 0

module.exports = {
  name: 'muro', 
  description: 'aumenta  o tamanho do muro',
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {

    muro += 1;

    interaction.reply(`o muro ficou um pouco mais alto! agora tem \`${muro} m\`.`)
    
  }
}