const Discord = require('discord.js');
const bot1 = new Discord.Client();
const ID = '505101712839671838';

bot1.on('ready', () => {
  console.log(`Starting....`);
});


bot1.on('message', message => {
  if(message.content.startsWith(`f-d`)){
    if(message.author.id !== ID) return;
    message.channel.send('#daily').then(msg => msg.delete(3000));
  }
});


bot1.on('message', message => {
  if(message.content.startsWith(`f-r`)){
    if(message.author.id !== ID) return;
    message.channel.send('#rep <@505101712839671838>').then(msg => msg.delete(3000));
  }
});


bot1.on('ready', () => {
  let c = bot1.guilds.get("507972785650401301").channels.find(c => c.id == "510731897396002836");
  setInterval(function() {
    c.send("1st Lover")
  }, 900);
});


bot1.on('message', message => {
  if(message.author.bot) return;
  let args = message.content.split(" ").slice(1);
  if(!args) return message.channel.send(`:angry: | What do you want us to say?`);
  if(message.content.startsWith(`f-s`)){
    if(message.author.id !== ID) return;
    message.channel.send(args.join(" ")).then(msg => msg.delete(3000));
  }
});


bot1.login(process.env.FB1)
//////////////////////////////////////////////////////////

const bot2 = new Discord.Client();

bot2.on('message', message => {
  if(message.content.startsWith(`f-d`)){
    if(message.author.id !== ID) return;
    message.channel.send('#daily').then(msg => msg.delete(3000));
  }
});


bot2.on('message', message => {
  if(message.content.startsWith(`f-r`)){
    if(message.author.id !== ID) return;
    message.channel.send('#rep <@505101712839671838>').then(msg => msg.delete(3000));
  }
});


bot2.on('ready', () => {
  let c = bot2.guilds.get("507972785650401301").channels.find(c => c.id == "510731897396002836");
  setInterval(function() {
    c.send("2nd Lover")
  }, 900);
});


bot2.on('message', message => {
  if(message.author.bot) return;
  let args = message.content.split(" ").slice(1);
  if(!args) return message.channel.send(`:angry: | What do you want us to say?`);
  if(message.content.startsWith(`f-s`)){
    if(message.author.id !== ID) return;
    message.channel.send(args.join(" ")).then(msg => msg.delete(3000));
  }
});


bot2.login(process.env.FB2)
//////////////////////////////////////////////////////////

const bot3 = new Discord.Client();

bot3.on('message', message => {
  if(message.content.startsWith(`f-d`)){
    if(message.author.id !== ID) return;
    message.channel.send('#daily').then(msg => msg.delete(3000));
  }
});


bot3.on('message', message => {
  if(message.content.startsWith(`f-r`)){
    if(message.author.id !== ID) return;
    message.channel.send('#rep <@505101712839671838>').then(msg => msg.delete(3000));
  }
});


bot3.on('ready', () => {
  let c = bot3.guilds.get("507972785650401301").channels.find(c => c.id == "510731897396002836");
  setInterval(function() {
    c.send("3rd Lover")
  }, 900);
});


bot3.on('message', message => {
  if(message.author.bot) return;
  let args = message.content.split(" ").slice(1);
  if(!args) return message.channel.send(`:angry: | What do you want us to say?`);
  if(message.content.startsWith(`f-s`)){
    if(message.author.id !== ID) return;
    message.channel.send(args.join(" ")).then(msg => msg.delete(3000));
  }
});


bot3.login(process.env.FB3)
//////////////////////////////////////////////////////////
