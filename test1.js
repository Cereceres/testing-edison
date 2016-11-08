var m = require('mraa'); //require mraa
 
console.log('MRAA Version: ' + m.getVersion());
let rfid_UART = new m.Uart(0)

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
        console.log("data received: " + data.toString());
		console.log ("data: " + data.toString());
    });
    
});


	 
console.log("Note: connect Rx and Tx of UART with a wire before use");
	        
function sleep(delay) {
	delay += new Date().getTime();
	while (new Date() < delay) { }
}
 
console.log("Set UART parameters");
        
let re1 = rfid_UART.setTimeout(1000,1000,1000);
console.log("res1:", "res1"+re1);
		      
let re2 = rfid_UART.setBaudRate(9600);
console.log("res2:", "res2"+re2);
				    
let re3 = rfid_UART.SetNonBlocking(false);
console.log("res3:", "res3"+re3);
						  
let re4 = rfid_UART.setFlowcontrol(false,false);
console.log("res4:", "res4"+re4);
							        
let re5 = rfid_UART.setMode(8,0,1);
console.log("res5:", "res5"+re5);
									      
sleep(200);
										     
var value = "AA0003000100048E";
var t = rfid_UART.writeStr(value);
sleep(200);
console.log("res6:", "res6"+ value + t);
														 
var result_7 = rfid_UART.readStr(7);
sleep(200);
var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder('utf-8');
console.log('result==>', result_7)
var text = decoder.write(result_7);
console.log("res7:", "res7"+text);



let val = new Buffer("AA0003000100048E",'utf-8'); 
var t = rfid_UART.write(val);
sleep(200);

var res8 = rfid_UART.dataAvailable(8);
sleep(200);				

console.log("res8:", "res8"+res8.toString());

var result_8 = rfid_UART.read(8);
sleep(200);
var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder('utf-8');
var text = decoder.write(result_8);
console.log("res9:",text);		

var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder('hex');
var text = decoder.write(result_8);
console.log("finalmente2",text);
