const axios = require('axios');

module.exports.config = {
  name: 'ai',
  version: '1.0.0',
  role: 0,
  hasPrefix: false,
  aliases: ['snow', 'ai'],
  description: "An AI command powered by Snowflakes AI",
  usage: "snowflakes [prompt]",
  credits: 'churchill',
  cooldown: 3,
};

module.exports.run = async function({ api, event, args }) {
  const input = args.join(' ');
  
  if (!input) {
    api.sendMessage(` 

━━━━━━━━━━━━━━━

 Hi, how can I assist you?`, event.threadID, event.messageID);
    return;
  }
  
  api.sendMessage(`🔍𝐬𝐞𝐚𝐫𝐜𝐡 𝐤𝐨 𝐦𝐮𝐧𝐚, 𝐡𝐚𝐧𝐭𝐚𝐲𝐢𝐧 𝐦𝐨𝐤𝐨....`, event.threadID, event.messageID);
  
  try {
    const { data } = await axios.get(`https://hashier-api-snowflake.vercel.app/api/snowflake?ask=${encodeURIComponent(input)}`);
    if (data.response) {
      api.sendMessage(data.response + "\n\nHave a great day! 🙂", event.threadID, event.messageID);
    } else {
      api.sendMessage('No response found.', event.threadID, event.messageID);
    }
  } catch (error) {
    api.sendMessage('An error occurred while processing your request.', event.threadID, event.messageID);
  }
};
