var WebSocketClient = require('websocket').client;
var count = 100;
var url = "ws://localhost:3000/echo";
	
for(var i = 0; i < count; i++){
	var client = new WebSocketClient();
	client.connect(url);
	client.on("connect",function(connection){
		connection.sendUTF("Hallo Welt");
		connection.on("message",function(message){
			console.log(message);
			connection.sendUTF("Hallo Welt");
		});
		connection.on("close",function(){
			delete connection;
		});
	});
	client.on("connectFailed",function(err){
		client.connect(url);
		console.log(new Date() + err);
	});
}