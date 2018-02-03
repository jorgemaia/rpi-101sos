var mqtt = require('mqtt')
var client  = mqtt.connect('https://broker.mqttdashboard.com', { 
    will: {
    topic: 'canalCTL-prj1118', 
    payload: 'dev1 - desligado'
    }
    })


var ip = require('ip');
 
var meuip = ip.address() // my ip address  




client.on('connect', function () {
  
  client.publish('canalCTL-prj1118', 'dev1 - Estou ligado: ' + meuip);
})
 