exports.run = async (client,message,args,db) => {
    var msg = await db.get("msg");
    if(msg == "none") return client.sendErr(message, "The message is already at it's default!")
    var res = await client.sendSettings(message, ["Message Reply", msg, "none"], ['Reset filter message!', 'Filter message reset by ' + message.author.username])
        if(res == 200) return db.set("msg", null);
        else return console.log("Error: " + res)
}
exports.info = {
    name: 'resetmsg',
    description: "Reset's the filter message, ({prefix}setmsg) to the default message",
    format: "{prefix}resetmsg"
}