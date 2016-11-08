var m = require('mraa'); //require mraa
 
console.log('MRAA Version: ' + m.getVersion());
rfid_UART = new m.Uart(0)

var serialPath = rfid_UART.getDevicePath(); 
console.log("serialPath",serialPath);

var SerialPort = require('serialport');
var serialPort = new SerialPort(serialPath, {
    baudrate: 9600
});

serialPort.on("open",function() {
    console.log("open");
    console.log("Connected to "+serialPath);
    serialPort.on("data", function(data) { //Read available data from serial port
    	var StringDecoder = require('string_decoder').StringDecoder;
		var decoder = new StringDecoder('utf8');
       // console.log("data received: " + data);
    console.log(decoder.write("data received: " + data));
		//console.log ("data: " + data);
		console.log(decoder.write("data: " + data));
    });
    
});


	 
console.log("Note: connect Rx and Tx of UART with a wire before use");
	        
function sleep(delay) {
	delay += new Date().getTime();
	while (new Date() < delay) { }
}
 
console.log("Set UART parameters");
        
re1 = rfid_UART.setTimeout(1000,1000,1000);
console.log("res1:", "res1"+re1);
		      
re2 = rfid_UART.setBaudRate(9600);
console.log("res2:", "res2"+re2);
				    
re3 = rfid_UART.SetNonBlocking(false);
console.log("res3:", "res3"+re3);
						  
re4 = rfid_UART.setFlowcontrol(false,false);
console.log("res4:", "res4"+re4);
							        
re5 = rfid_UART.setMode(8,0,1);
console.log("res5:", "res5"+re5);
									      
sleep(200);
var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder('utf8');

var cent = new Buffer([0xC2, 0xA2]);
console.log(decoder.write(cent));

var euro = new Buffer([0xE2, 0x82, 0xAC]);
console.log(decoder.write(euro));