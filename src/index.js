import { config } from "dotenv";
import { Client, GatewayIntentBits } from "discord.js";

config();

const client = new Client({intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
]});

const TOKEN = process.env.TOKEN;


client.login(TOKEN);

client.on('ready', () => {
    console.log(`${client.user.tag} pronto!`);
});

client.on('messageCreate', async (message) => {
    var date = new Date(message.createdTimestamp);
    console.log(`${message.author.username}: ${message.content} ||| DATA: ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} ||| HORA: ${date.getHours()}:${date.getHours()}:${date.getSeconds()} ||| CANAL: ${message.channel.name} `)
});