function Account(name, balance){
  this.name = name;
  this.balance = balance;
}

Account.prototype.deposit = function(value){
  return this.balance += value;
}
Account.prototype.withdraw = function(value){
  return this.balance -= value;
}

$(document).ready(function(){
  $("form .create-account").click(function(event) {
    event.preventDefault();

    var nameInput = $("#name").val();
    var balanceInput = parseInt($("#balance").val());
    newAccount = new Account(nameInput,balanceInput);
    console.log(newAccount);

  });
  $("form .deposit").click(function(event) {
    event.preventDefault();
    var depositInput = parseInt($("#deposit").val());
    newAccount.deposit(depositInput);
    $(".output").append(newAccount.balance)


  });
  $(".withdraw").click(function(event) {
    event.preventDefault();
    var withdrawInput = parseInt($("#withdraw").val());
    newAccount.withdraw(withdrawInput);
    $(".output").append(newAccount.balance);

  });

});
