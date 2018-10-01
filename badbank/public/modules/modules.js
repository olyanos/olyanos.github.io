
var ui = {};

ui.navigation = `
    <!-- ------------- YOUR CODE: Navigation UI ------------- --> 
`;

ui.createAccount = `
<form>
<div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
</div>
<div class="form-group">
    <label for="exampleInputEmail2">Name</label>
    <input type="name" class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter Name">
</div>
<div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
</div>
<div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">I agree to the terms and conditions</label>
</div>
<button type="button" onclick="create()" class="btn btn-primary">Submit</button>
<br />
<br />

</form>



`;

ui.login = `
    <!-- ------------- YOUR CODE: Login UI ------------- --> 
    <h1> Login </h1>
    <div class="form-group">
    <label for="exampleInputEmail3">Name</label>
    <input type="email" class="form-control" id="exampleInputEmail7" aria-describedby="emailHelp" placeholder="Enter Name">
</div>
    <div class="form-group">
        <label for="exampleInputPassword3">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword8" placeholder="Password">
    </div>
    <button type="button" onclick="login()" class="btn btn-primary"> Log in</button>
    <br />
    <br />

`;

ui.deposit = `
    <!-- ------------- YOUR CODE: Deposit UI ------------- --> 
    <h1>Deposite </h1>
    <div class="form-group">
    <label for="exampleInputEmail4">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail12" aria-describedby="emailHelp" placeholder="Enter Email">
</div>
    <div class="form-group">
        <label for="exampleInputPassword4">Amount</label>
        <input type="number" class="form-control" id="Amount1" placeholder="Password">
    </div>
    <button type="button" onclick="deposit()" class="btn btn-primary">Submit</button>
<br />
<br />

`;

ui.withdraw = `
    <!-- ------------- YOUR CODE: Withdraw UI ------------- --> 
    <h1>Deposite </h1>
    <div class="form-group">
    <label for="exampleInputEmail4">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail188" aria-describedby="emailHelp" placeholder="Enter Email">
</div>
    <div class="form-group">
        <label for="exampleInputPassword4">Amount</label>
        <input type="number" class="form-control" id="Amount12" placeholder="Password">
    </div>
    <button type="button" onclick="withdraw()" class="btn btn-primary">Submit</button>
<br />
<br />


`;

ui.transactions = `
    <!-- ------------- YOUR CODE: Transactions UI ------------- --> 
    <h1> Transactions </h1>

`;

ui.balance = `
    <!-- ------------- YOUR CODE: Balance UI ------------- --> 
    <h1> Balance </h1>
    <div class="form-group">
    <label for="exampleInputEmail85">Name</label>
    <input type="email" class="form-control" id="exampleInputEmai85" aria-describedby="emailHelp" placeholder="Enter email">
    </div>
    <button type="button" onclick="balance()" class="btn btn-primary"> show me my balance</button>
    <br />
    <br />

`;

ui.default = `
    <!-- ------------- YOUR CODE: Default UI ------------- --> 
`;

ui.allData = `
    <!-- ------------- YOUR CODE: All Data UI ------------- --> 
    <h1> All Data </h1>
    <button type="button" onclick="allData()" class="btn btn-primary">Show me all the data</button>
    <br />
    <br />
`;

var target     = document.getElementById('target');
var navigation = document.getElementById('navigation');
navigation.innerHTML += ui.navigation;

var loadCreateAccount = function(){
    target.innerHTML = ui.createAccount;

   
};

var loadLogin = function(){
    target.innerHTML = ui.login;
};

var loadDeposit = function(){
    target.innerHTML = ui.deposit;
};

var loadWithdraw = function(){
    target.innerHTML = ui.withdraw;
};

var loadTransactions = function(){
    target.innerHTML = ui.transactions;
};

var loadBalance = function(){
    target.innerHTML = ui.balance;
};

var defaultModule = function(){
    target.innerHTML = ui.default;
};

var loadAllData = function(){
    target.innerHTML = ui.allData;
    ;
};

defaultModule();
