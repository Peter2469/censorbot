exports.run = async (client,message,args,db) => {
	let arg1 = args[0]
	if(!arg1) {
		return client.sendErr(message, "Error, format: " + client.config.prefix + "setmsg <new_message>")
    }
    var newMessage = args.join(' ').toString()
    var oldMessage = await db.get("msg");
    if(newMessage == oldMessage) return client.sendErr(message, "This is already the message set!");
    if(!oldMessage) oldMessage = "OFF"
	var res = await client.sendSettings(message, ["Message Reply", oldMessage, newMessage], [`Set new response to \`${newMessage}\``, 'Message set by ' + message.author.username]);
    if(res == 200) return db.set("msg", newMessage);
    else return console.log("Error: " + res)
}
exports.info = {
    name: 'setmsg',
    description: "Set's the custom filter message (when a curse is deleted)",
    format: "{prefix}setmsg [new message]"
}