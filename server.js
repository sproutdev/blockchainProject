var express = require('express');

var request = require('request');
var app = express();
app.set('views', __dirname + '/');
app.engine('html', require('ejs').renderFile);
app.engine('css', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use('/', express.static('stuff'));



const komodo = require('npm-komodorpc-library');

var key = "Ur3KwBpPuLPfQFMRVeFmTKycdSdRZ3ZyqpWmJJsn2zN9zp7PJH53";
var moneytoSend = 0.1 ;

const conn = new komodo.Connect(rpc_user='user919610456',
rpc_password='pass21ddf44732ec8c8b92e97b107f357f94d0f646d6ec60ef2eed945ba695986b29c1',
rpc_ipaddress='http://127.0.0.1',
rpc_port='11154');

let walletinfo = conn.getwalletinfo()
let hashinfo = conn.getblockchaininfo()

hashinfo.then((res)=>console.log(res))




var key = "Ur3KwBpPuLPfQFMRVeFmTKycdSdRZ3ZyqpWmJJsn2zN9zp7PJH53";
var moneytoSend = 0.1 ;

var rpcuser= "user919610456"
var rpcpassword= "pass21ddf44732ec8c8b92e97b107f357f94d0f646d6ec60ef2eed945ba695986b29c1"

var headers = {
    'content-type': 'text/plain;'
};
var par1 = ['\"'+key+ '\"' , moneytoSend * 2 , "\"donation\"" , "\"seans outpost\""]
var dataString = '{"jsonrpc": "1.0", "id":"curltest", "method": "sendtoaddress", "params": ["RQKW4JCoRGk4LG5h7gvgJZdnypgPD7Fkqd", 0.1, "donation", "seans outpost"] }';
var d1 = '{"jsonrpc": "1.0", "id":"curltest", "method": "sendtoaddress", "params": [' + par1 + ']}' ;

 var options = {
     url: 'http://127.0.0.1:11154/',
     method: 'POST',
     headers: headers,
     body: d1,
     auth: {
         'user': rpcuser,
         'pass': rpcpassword
     }
 };

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log("The Result of Transaction are");
        console.log(body);
    }
}

app.get('/face', function(req,res){
  res.render('face.html')
});

app.get('/index.html', function(req,res){
  res.render('index.html')
});

app.get('script.js', function(req, res){
  res.render('script.js')
});

app.get('/quiz.html', function(req,res){
  console.log(req.query.add);
  moneytoSend = req.query.amt ;
  console.log("The Amount of money is ");
  console.log("transaction successful");
  console.log("Your marks are stored in this hash value");
  console.log(hashinfo);
  res.render('quiz.html')
});


app.get('/checkans', function(req,res){
  var a = req.query.question1
  var b = req.query.question2
  var c = req.query.question3
  var d = req.query.question3
  var e = req.query.question3
  var f = req.query.question3
  var g = req.query.question3
  var h = req.query.question3
  var i = req.query.question3
  var j = req.query.question3

  var count = 0 ;
  if (a === 'false'){
    count ++ ;
  }
  if( b === 'false'){
    count ++ ;
  }
  if( c === 'true'){
    count ++ ;
  }

  if( d === 'true'){
    count ++ ;
  }

  if( e === 'false'){
    count ++ ;
  }

  if( f === 'true'){
    count ++ ;
  }

  if( g === 'false'){
    count ++ ;
  }

  if( h === 'true'){
    count ++ ;
  }

  if( i === 'false'){
    count ++ ;
  }

  if( j === 'false'){
    count ++ ;
  }

  if(count === 10){
    request(options, callback);
    res.send('congo.html', {count: count})
  }
  else{
    res.render('congo.html')
  }
});



app.listen(8282, function() {
  console.log('Server running at http://127.0.0.1');
});
