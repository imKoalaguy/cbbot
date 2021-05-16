const Discord = require("discord.js")
const client = new Discord.Client()

client.on("ready", () => {
  console.log("Lubie ciasteczka!")
  console.log(`Zalogowano jako ${client.user.tag}!`)
})

client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("Pong!")
  }
})

client.login("ODQzNDk4MjgxNTM1NjY4MjU0.YKEu_Q.PrZMqj27Dwig5bnZmvBDTKoirZ8")
