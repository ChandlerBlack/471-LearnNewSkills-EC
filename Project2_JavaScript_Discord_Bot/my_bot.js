require('dotenv').config();
const { Client, GatewayIntentBits, EmbedBuilder, AttachmentBuilder } = require('discord.js');
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ] 
});


// general text channel: 1377510734237405275
// general voice channel: 1377510734237405276

client.on("ready", async () => {
    console.log("Logged in as " + client.user.tag);
    client.user.setActivity("subject to online lynching");
    
    for (const guild of client.guilds.cache.values()) {
        console.log(" - " + guild.name);
        guild.channels.cache.forEach(channel => {
            console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`);
        });
        
        // Fetch ALL members including offline ones
        await guild.members.fetch();
        
        // List all members in the server
        // console.log("\nMembers in " + guild.name + ":");
        // guild.members.cache.forEach(member => {
        //     console.log(` - ${member.user.tag} (${member.user.id})`);
        // });
    }

    let generalChannel = client.channels.cache.get("1377510734237405275");
    
    // Send member list to Discord channel
    for (const guild of client.guilds.cache.values()) {
        let memberList = "**Server Members:**\n";
        guild.members.cache.forEach(member => {
            memberList += `- ${member.user.tag}\n`;
        });
        generalChannel.send(memberList);
    }
    
    // const embed = new EmbedBuilder()
    //     .setTitle("TeeHee I'm online!")
    //     .setImage("attachment://yesss.png");
    
    // const attachment = new AttachmentBuilder("C:\\Users\\chand\\Downloads\\yesss.png");
    

});

client.on("messageCreate", (receivedMessage) => {
    if (receivedMessage.author == client.user) {
        return;
    }
    // receivedMessage.channel.send(receivedMessage.author.toString() + " said: " + receivedMessage.content);
    // receivedMessage.react("👍");
    processCommand(receivedMessage);

});

async function processCommand(receivedMessage) {

    // Block HoneyMustard from using commands
    if (receivedMessage.author.username.includes("HoneyMustard") || receivedMessage.member.displayName.includes("HoneyMustard")) {
        return receivedMessage.channel.send("My God has not given you permission to speak to me!");
    }

    // make an array list of all members in the server
    const membersArray = Array.from(receivedMessage.guild.members.cache.values());
        console.log(membersArray);

    if (receivedMessage.content.startsWith('!spam')) {
        const args = receivedMessage.content.split(' ');
        const username = args[1]; // Gets "james_loser" from the command

        if (!username) {
            return receivedMessage.channel.send("Please specify a username, e.g., `!spam james_loser`");
        }

        // Find the member in the guild
        const member = receivedMessage.guild.members.cache.find(m => m.user.username.includes(username) || m.displayName.includes(username));
        console.log(member);
        
        if (member) {
            for (let i = 0; i < 10; i++) {
                await receivedMessage.channel.send(member.toString());
            }

        } else {
            receivedMessage.channel.send(`Could not find a member with username or nickname "${username}".`);
        }
    }
}

// Load token from environment variable
const token = process.env.DISCORD_BOT_TOKEN;
if (!token) {
    console.error('ERROR: DISCORD_BOT_TOKEN environment variable is not set!');
    process.exit(1);
}

client.login(token)

