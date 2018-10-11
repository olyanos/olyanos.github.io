// var low     = require('lowdb');
// var fs      = require('lowdb/adapters/FileSync');
// var adapter = new fs('db.json');
// var db      = low(adapter);

function create() {
    // -------------------------------------
    var obj = {name:document.getElementById("exampleInputEmail2").value,
    email: document.getElementById("exampleInputEmail1").value
    ,balance:"0",
    password: document.getElementById("exampleInputPassword1").value
    ,transaction:"create"};
    alert('Hello '+obj.name+', your account has been created');
    // -------------------------------------  
    var temp1 = String(obj.name);
    var temp2 = String(obj.email);
    var temp3 = String(obj.password);
    var temp4 = '/account/create';
    var temp5 = '/'
    var temp6  = temp4+temp5+temp1+temp5+temp2+temp5+temp3;
    var url = temp6;
    superagent
        .get(url)
        .end(function(err,res){
            if(err){ console.log(err);}
            else { console.log(res);}

        })
        console.log('Hello '+obj.name+', your account has been created');
}

function login() {
    var temp1 = document.getElementById("exampleInputEmail7").value;
    var temp2 = document.getElementById("exampleInputPassword8").value;
    var temp3 = '/'
    var temp4 = '/account/login'
    var url = temp4+temp3+temp1+temp3+temp2;
    superagent
    .get(url)
    .end(function(err,res){
        if(err){ console.log(err);}
        else { console.log(res.text);}

    })

    // var current_account = db.get('accounts').find({temp1}).value();
    // console.log('welcome '+current_account.name+ ' your balance is = '+current_account.balance);
}

function deposit() {
    var temp1 = '/account/deposit';
    var temp2 = '/'
    var temp3 = document.getElementById("exampleInputEmail12").value;
    var temp4 = document.getElementById("Amount1").value;
    var url =temp1+temp2+temp3+temp2+temp4;

    superagent
        .get(url)
        .end(function(err,res){
            if(err){ console.log(err);}
            else { console.log(res.text);}

        })


}

function withdraw() {
    var temp1 = '/account/withdraw';
    var temp2 = '/'
    var temp3 = document.getElementById("exampleInputEmail188").value;
    var temp4 = document.getElementById("Amount12").value;
    var url =temp1+temp2+temp3+temp2+temp4;

    superagent
        .get(url)
        .end(function(err,res){
            if(err){ console.log(err);}
            else { console.log(res.text);}

        })
}

function transactions() {
    var temp1 = document.getElementById("exampleInputEmail39").value;
    var temp3 = '/'
    var temp4 = '/account/transactions'
    var temp6 = temp4+temp3+temp1;
    var url = temp6;
    superagent
    .get(url)
    .end(function(err,res){
        if(err){ console.log(err);}
        else { console.log(res.text);}

    })
}

function balance() {
    var temp1 = document.getElementById("exampleInputEmai85").value;
    var temp3 = '/'
    var temp4 = '/account/get'
    var url = temp4+temp3+temp1;
    superagent
    .get(url)
    .end(function(err,res){
        if(err){ console.log(err);}
        else { console.log(res.text);}

    })
}


function allData() {
    // -------------------------------------
    var url = '/account/all';

    superagent
        .get(url)
        .end(function(err,res){
            if(err){ console.log(err);}
            else { console.log(res.text);}

        })
    
    // -------------------------------------
}

























console.log('');