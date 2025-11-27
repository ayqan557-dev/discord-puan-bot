// index.js - basit ve çalışır örnek
const express = require('express');
const { Client, GatewayIntentBits } = require('discord.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Bot calisiyor!'));

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log('Bot online!');
});

client.on('messageCreate', message => {
  if (message.author.bot) return;
  if (message.content === '/puan-ekle') {
    message.reply('Puan eklendi! ✅');
  }
});

app.listen(PORT, () => console.log(`Web sunucusu baslatildi! Port: ${PORT}`));

client.login(process.env.DISCORD_TOKEN).catch(err => console.error('Discord login error:', err));
