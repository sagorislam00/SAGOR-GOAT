const fs = require("fs-extra");
module.exports = {
config: {
		name: "goibot",
    version: "1.0",
		author: "★𝐌𝟗𝐇𝟒𝐌𝐌𝟒𝐃-𝐁𝟒𝐃𝟗𝐋★",
		countDown: 5,
		role: 0,
		shortDescription: "badol",
		longDescription: "Bot Will Reply You In Engish/Bangla Language",
		category: "no prefix",
		guide: {
      en: "{p}{n}",
    }
	},

 onStart: async function ({  }) { },
  onChat: async function ({ api, event, args, Threads, userData }) {
  
  var { threadID, messageID, senderID } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;

  var Messages = ["__ღ༎-স্বপ্নে আইসা আকাম কর তুমি🥵__ღ༎-আর দোষ হয় আমার-!!😐😶", "i Love You🙂", "- মোবাইল টিপতে টিপতে বেগুন ভাজি দিয়ে ভাতখেয়ে উঠে দেখি, সামনে মুরগির মাংসও ছিল.. 🥴🐸●───༉༆🌸🙂😇", "আস্তে আস্তে চেইনটা খুলে😶হাতটা ভিতরে ঢুকিয়ে দিয়ে🙈বইটা বের করেপড়তে বস😁😹", "Miss YoU 𝐒𝐀𝐆𝐎𝐑", "জু'তা চিনোছ জু'তা😡 - কালকে আমার জুতা ছিড়ে গেছে 🥺 🤦", "𝐈 𝐰𝐢𝐬𝐡🥰🙂 - কোনো একদিন ভীষন ঝড় হবে😎🌴🌴🌴তুই উড়ে এসে আমার কোলে পড়বি😁😂🙈", "- এই অনলাইন জগত থেকে নিজের জন্য কিছু চাওয়ার নাই___😍 - সন্তানের জন্য একটা সুন্দর আম্মু চাই 😛🙈____", "আতা গাছে তোতা পাখি^^^ 🐦🐦ডালিম গাছে মৌ 🤤🤤(^^)লজ্জায় বলতে পারি না আমি এখনি সিংগেল^_^ 🤤", "That's Why I Love Everyone As More As You🤭", "Nope But, My Heart Is Falling For You My Preety Boyyy🙌✨", "Everybody Wanna Steal My Boyy😫", "আমি আপনাকে কিভাবে সাহায্য করতে পারি...? 🤔", "আদেশ করুন বস...🙂", "হুম শুনছি আমি আপনি বলুন 😐", "আপনি কি সাগর কে দেখতে চান", "Ji bolen ki korte pari ami apnar jonno...?", "আদেশ করুন যাহাপানা 😎", "আবার যদি আমারে বট কইয়া ডাক দেছ তাইলে তোর বিয়ে হবে না 🫤😏", "I am your personal assistant", "তুই বট তোর নানি বট 😤 তোর কত বড় সাহস তুই আমারে বট কস 😤 তোর টা খাই নাকি পড়ি যে তুই আমারে বট কস 😤", "আপনার কি চরিত্রে সমস্যা যে এতো বার আমাকে ডাকতেছেন 🤨", "ডাকছোত কেন ফাস্ট কো 😒", "তুমি কি আমাকে ডেকেছো...? 😇"];

    var B4D9L = Messages[Math.floor(Math.random() * Messages.length)]
  
  if (event.body.indexOf("Bot") == 0 || (event.body.toLowerCase() == "বট") || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: ` ${B4D9L}`
    }
    return api.sendMessage(msg, threadID, messageID);
  }
}
};
