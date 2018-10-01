
function create() {
    // -------------------------------------
    console.log('I am in create account in api.js');

    var obj = {name:document.getElementById("exampleInputEmail2").value,
    email: document.getElementById("exampleInputEmail1").value
    ,balance:"0",
    password: document.getElementById("exampleInputPassword1").value
    ,transaction:"create"};
    alert('Hello '+obj.name+', your account has been created');
    console.log('debug that');
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
        else { console.log(res);}

    })
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
            else { console.log(res);}

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
            else { console.log(res);}

        })
}

function transactions() {
    // -------------------------------------
    //  YOUR CODE
    //  Get all user transactions
    // -------------------------------------
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
        else { console.log(res);}

    })
}


function allData() {
    // -------------------------------------
    var url = '/account/all';

    superagent
        .get(url)
        .end(function(err,res){
            if(err){ console.log(err);}
            else { console.log(res);}

        })
    
    // -------------------------------------
}

