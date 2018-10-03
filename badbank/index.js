// setup server
var express = require('express');
var app = express();
// setup directory used to serve static files
app.use(express.static('public'));

// setup data store
var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);

//db.defaults({ posts: []}).write();
db.defaults({ accounts: [{name:'',email:'',balance:'',password:'', transactions:''}] }).write();
// required data store structure

app.get('/account/create/:name/:email/:password', function (req, res) {
    var new_account = {
        "name" : req.params.name,
        "email" : req.params.email,
        "password" : req.params.password,
        "balance":0,
        "transactions":'Account Created, ' 

    };
    db.get('accounts').push(new_account).write();
});

app.get('/account/login/:email/:password', function (req, res) {

var current_account = db.get('accounts').find({email:req.params.email}).value();
console.log('welcome '+current_account.name+ ' your balance is = '+current_account.balance);

});

app.get('/account/get/:email', function (req, res) {

    var current_account = db.get('accounts').find({email:req.params.email}).value();
    balance = current_account.balance;
    console.log('Hello '+ current_account.name +' your balance is = '+balance)
});

app.get('/account/deposit/:email/:amount', function (req, res) {

   var current_account = db.get('accounts').find({email:req.params.email}).value();
   new_balance = current_account.balance + Number(req.params.amount);
   new_transactions = current_account.transactions + (' deposite = '+req.params.amount+', ');
   db.get('accounts')
   .find({ email: req.params.email })
   .assign({ balance: new_balance , transactions:new_transactions})
   .write()
   console.log('new amount deposited')

});

app.get('/account/withdraw/:email/:amount', function (req, res) {
    var current_account = db.get('accounts').find({email:req.params.email}).value();
    new_balance = current_account.balance - Number(req.params.amount);
    new_transactions = current_account.transactions + (' withdraw = '+req.params.amount+', ');
    db.get('accounts')
    .find({ email: req.params.email })
    .assign({ balance: new_balance, transactions:new_transactions})
    .write()
 console.log('new amount withdrawed')
});

app.get('/account/transactions/:email', function (req, res) {
    var current_account = db.get('accounts').find({email:req.params.email}).value();  
    transactions_1 = current_account.transactions;
    console.log('Hello '+ current_account.name +' your history of transactions is the following: '+transactions_1+' your current balance = '+current_account.balance)

});

app.get('/account/all', function (req, res) {

    console.log((db.get('accounts').value()));

});
// start server
app.listen(3000,function(){

    console.log('Running on 3000');
}
)