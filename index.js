import { Client, GatewayIntentBits, EmbedBuilder } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const loader = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const prefixo = "!";

loader.once("ready", async (self) => {
    console.log(`Conectado como ${self.user.username}`);
});

loader.on("messageCreate", async (message) => {
    if (!message.content.startsWith(prefixo)
        || message.author.bot || !message.guild) return;

    const commandName = message.content.toLowerCase()
        .split(" ")[0].substring(prefixo.length);

    console.log(commandName);

    if (commandName === 'oi') {
        message.reply({ content: 'Olá enfermeira!' });
    }
});

const token = process.env.DISCORD_TOKEN;
loader.login(token);
