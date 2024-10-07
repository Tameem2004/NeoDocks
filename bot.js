// Importing required libraries
const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');

// Replace with your Telegram bot token from BotFather
const token = '6735594191:AAF3k4XCfpnUvpOTa5FRl-ymZh6nLMKNLK4';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Set of documentation URLs or basic information for NeoX T4 Chain
const docs = {
  'overview': 'https://neox.io/t4-overview',
  'getting_started': 'https://neox.io/getting-started',
  'smart_contracts': 'https://neox.io/smart-contracts',
  'tokenomics': 'https://neox.io/tokenomics',
  'wallets': 'https://neox.io/wallet-integration',
};

// Welcome message when user starts the bot
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const welcomeMessage = `Welcome to the NeoX T4 Chain Documentation Bot!\n\nHere are the available commands:\n
  /Block - View On Block Explorer
  /overview - Get an overview of NeoX T4 Chain\n
  /getting_started - Learn how to get started with NeoX T4\n
  /smart_contracts - Documentation on smart contracts on NeoX\n
  /tokenomics - Understand the tokenomics of NeoX T4\n
  /wallets - Documentation on wallet integration\n
  /help - Display all available commands\n\nUse any of the commands to get more info!`;
  bot.sendMessage(chatId, welcomeMessage);
});

// Command handlers for each documentation section
bot.onText(/\/overview/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `NeoX T4 Overview: ${docs['overview']}`);
});

bot.onText(/\/getting_started/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `Getting Started with NeoX T4: ${docs['getting_started']}`);
});

bot.onText(/\/smart_contracts/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `Smart Contracts on NeoX T4: ${docs['smart_contracts']}`);
});

bot.onText(/\/tokenomics/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `NeoX T4 Tokenomics: ${docs['tokenomics']}`);
});

bot.onText(/\/wallets/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `Wallet Integration Documentation: ${docs['wallets']}`);
});

bot.onText(/\/Block/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, `View On Block Explorer: ${'https://xt4scan.ngd.network/'}`);
  });

// Help command to display all commands
bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;
  const helpMessage = `Here are the available commands:\n
  /overview - Get an overview of NeoX T4 Chain\n
  /getting_started - Learn how to get started with NeoX T4\n
  /smart_contracts - Documentation on smart contracts on NeoX\n
  /tokenomics - Understand the tokenomics of NeoX T4\n
  /wallets - Documentation on wallet integration\n
  /help - Display all available commands`;
  bot.sendMessage(chatId, helpMessage);
});

// Default response for unrecognized commands
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text.toLowerCase();

  if (!messageText.startsWith('/')) {
    bot.sendMessage(chatId, `I didn't understand that command. Type /help to see available commands.`);
  }
});
