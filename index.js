const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

client.on('ready', async () => {
    console.clear();
    console.log(`${client.user.tag} - rich presence started!`);

    const r = new Discord.RichPresence()
        .setApplicationId('1258311684334944286')
        .setType('PLAYING')
        .setURL('https://discord.gg/Warmuts')
        .setState('& N1tro Murah, Aman, Begaransi')
        .setName('Warmut V2')
        .setDetails('Menjual Berbagai App Premium')
        .setAssetsLargeImage('https://media.discordapp.net/attachments/1284020923888046130/1296107690178908192/20240609_172952_0000.png?ex=671115d9&is=670fc459&hm=e22c038628c907e9c64d6330076e0fae5f97edf3485eb2620fd6f0d53331f75b&=&format=webp&quality=lossless&width=423&height=423')
        .setAssetsLargeText('Testimoni 850+')
        .setAssetsSmallImage('https://media.discordapp.net/attachments/1284020923888046130/1296107690472243244/1196765932119408711.gif?ex=671115d9&is=670fc459&hm=24aa876199b9fb6daad7108d94e04ab34ec595e6b11c3891bb586be086335125&=')
        .setAssetsSmallText('Verified')
        .addButton('Server Warmut V2', 'https://discord.gg/warmuts')
        .addButton('Slow Res? Klik Ini', 'https://wa.me/6283102229967');

    client.user.setActivity(r);
    client.user.setPresence({ status: 'idle' });
});

client.login(process.env.TOKEN);












