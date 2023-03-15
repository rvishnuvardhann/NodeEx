const os=require('os')
console.log(os.arch()) 
console.log(os.hostname())
console.log(os.cpus())
console.log(os.totalmem())
console.log(os.freemem())
console.log(os.userInfo())
console.log(os.homedir())
//Events module
const events=require('events')
var myEmitter=new events.EventEmitter();
// myEmitter.on("someevent",function(a){
//     console.log("some event emitted"+"\n"+a,this)
// })
//Using Arrow function
// myEmitter.on("someevent",(a)=>{
//     console.log("some event emitted"+"\n"+a,this)
// })
// myEmitter.emit("someevent","welcome");
//synchronus-->asynch
myEmitter.on('event', (a, b) => {
    setImmediate(() => {
      console.log('this happens asynchronously',a,b);
    });
  });
myEmitter.emit('event', 'a', 'b');
  setImmediate(function A() {
	console.log("1st immediate");
});

setImmediate(function B() {
	console.log("2nd immediate");
});

process.nextTick(function C() {
	console.log("1st process");
});

process.nextTick(function D() {
	console.log("2nd process");
});

// First event queue ends here
console.log("program started");
//handling events only once
let m = 0;
myEmitter.once('Event', () => {
  console.log(++m);
});
myEmitter.emit('Event');
// Prints: 1
myEmitter.emit('Event');

//HTTP
let http=require('http')
let server=http.createServer((req,res)=>{
   if(req.url==="/"){
    res.write("Welcome to http server");
    res.end();
   }
   else if(req.url==='/cvr'){
    res.write("CVR");
    res.end();
   }
   else{
    res.write("No resorce exists");
    res.end();
   }
})
server.listen(3000);