const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
	config: {
		name: "info",
		version: "1.0",
		author: "★𝐌𝟗𝐇𝟒𝐌𝐌𝟒𝐃-𝐁𝟒𝐃𝟗𝐋★",
		countDown: 20,
		role: 0,
		shortDescription: { vi: "", en: "" },
		longDescription: { vi: "", en: "" },
		category: "owner",
		guide: { en: "" },
		envConfig: {}
	},
	onStart: async function ({ message }) {
		const botName = "𝐒𝐀𝐆𝐎𝐓___//𝟎𝟎𝟕";
		const botPrefix = "/";
		const authorName = "𝚂𝙰𝙶𝙾𝚁 𝙸𝚂𝙻𝙰𝙼";
		const ownAge = "𝟷7+";
		const teamName = "Muslim Cyber Security";
		const authorFB = "https://m.me/jahidul.islam.sagor.24";
		const authorInsta = "++";
		const tikTok = "++";
		const st = "ACTTVE";
		const urls = JSON.parse(fs.readFileSync('MBC.json'));
		const link = urls[Math.floor(Math.random() * urls.length)];
		const now = moment().tz('Asia/Jakarta');
		const date = now.format('MMMM Do YYYY');
		const time = now.format('h:mm:ss A');
		const uptime = process.uptime();
		const seconds = Math.floor(uptime % 60);
		const minutes = Math.floor((uptime / 60) % 60);
		const hours = Math.floor((uptime / (60 * 60)) % 24);
		const days = Math.floor(uptime / (60 * 60 * 24));
		const uptimeString = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

		message.reply({
			body: `♕︎➪𝖲𝖠𝖦𝖮𝖱-bot-information 𖤍🂱
\☢ ︎︎Bot-Name ☞︎︎︎ ${botName} 🂱
\☢︎︎ Bot-Prefix ☞︎︎︎ ${botPrefix} 𖤍
\☢ ︎︎Bot-Owner-Name ☞︎︎︎ ${authorName} ⚠︎
\☢︎︎ Bot-Owner-Age  ☞︎︎︎ ${ownAge} ⚠︎
\☢ ︎Bot-Owner-Facebook ☞︎︎︎ ${authorFB} ♧︎︎︎
\☢︎︎ Team-Name☞︎︎︎ ${teamName} 𓀬
\♕︎════════♔︎═════════♕︎

 ♲︎︎︎ Bot-Uptime𒊹︎︎︎
 \☢ ︎︎Bot-Raning-Time ☞︎︎︎ ${uptimeString} ❁
 \☢︎︎ Date☞︎︎︎ ${date} ꕥ
 \☢ Now-Time ☞︎︎︎ ${time} ☔︎
 \☢︎︎ Status ☞︎︎︎ ${st}🔰
 \♕════════𖣘═════════♕︎
 `,
			attachment: await global.utils.getStreamFromURL(link)
		});
	},
	onChat: async function ({ event, message, getLang }) {
		if (event.body && event.body.toLowerCase() === "info") {
			this.onStart({ message });
		}
	}
};
