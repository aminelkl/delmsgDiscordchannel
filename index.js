(async () => {
  const token = 'YOUR_DISCORD_TOKEN';
  const channelId = 'YOUR_CHANNEL_ID';
  const myUserId = 'YOUR_USER_ID';

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const headers = {
    'Authorization': token,
    'Content-Type': 'application/json',
  };

  const getMessages = async (channelId, options = {}) => {
    const response = await fetch(`https://discord.com/api/v9/channels/${channelId}/messages?${new URLSearchParams(options)}`, {
      method: 'GET',
      headers: headers,
    });

    return await response.json();
  };

  const deleteMessage = async (channelId, messageId) => {
    await fetch(`https://discord.com/api/v9/channels/${channelId}/messages/${messageId}`, {
      method: 'DELETE',
      headers: headers,
    });
  };

  let beforeId = null;

  while (true) {
    const options = {
      limit: 100,
    };

    if (beforeId) {
      options.before = beforeId;
    }

    const messages = await getMessages(channelId, options);

    if (!messages.length) {
      break;
    }

    for (const message of messages) {
      beforeId = message.id;

      if (message.author.id === myUserId) {
        console.log(`Deleting message: ${message.content}`);
        await deleteMessage(channelId, message.id);
        await delay(1000);
      }
    }
  }

  console.log('Finished deleting messages.');
})();