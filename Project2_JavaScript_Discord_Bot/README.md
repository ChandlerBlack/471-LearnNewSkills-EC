# Discord Bot Setup

## Installation

1. Install dependencies:
   ```bash
   npm install
   npm install dotenv
   ```

2. Create a `.env` file in this directory:
   ```
   DISCORD_BOT_TOKEN=your_actual_token_here
   ```

3. Run the bot:
   ```bash
   node my_bot.js
   ```

## Important Security Notes

- **NEVER** commit your `.env` file to Git
- **NEVER** hardcode tokens in your code
- The `.gitignore` file prevents `.env` from being committed
- If your token was exposed, regenerate it at https://discord.com/developers/applications
