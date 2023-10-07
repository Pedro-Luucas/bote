const Discord = require("discord.js")

module.exports = {
  name: 'ping', 
  description: 'ping do bot',
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {

    let ping = client.ws.ping;

    interaction.reply(`Olá ${interaction.user}, o ping do bot é \`${ping}ms\`.`)
    
  }
}