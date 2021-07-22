const net = require('net');
const readline = require("readline-sync")

const options = {
  port: 8080,
  host: "195.216.196.102"
}

const client = net.createConnection(options)

client.on("connect", ()=>{
  console.log("Successful connection")
  sendLine()
})

client.on("data", (data) => {
  console.log("Server response:" + data)
  sendLine()
})

client.on("error", (error)=>{
  console.log(error.message)
})

function sendLine() {
  var line = readline.question("digite algo")
  if(line == "0") {
    client.end()
  }else{
    client.write(line)
  }
}