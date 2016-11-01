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
Account.prototype.overdrawn = function(balance) {
  var status = false;
  if (this.balance <0 ) {
   status = true;
  }
  return status;
}

//document ready
$(document).ready(function(){
  //create account
  $("form .create-account").click(function(event) {
    event.preventDefault();

    var nameInput = $("#name").val();
    var balanceInput = parseInt($("#balance").val());
    newAccount = new Account(nameInput,balanceInput);
    $(".output").show();
    $(".customer").text(newAccount.name);
    $(".balance").text(newAccount.balance);
    $("#name").val("");
    $("#balance").val("");

  });

  //deposit funds
  $("form .deposit").click(function(event) {
    event.preventDefault();
    var depositInput = parseInt($("#deposit").val());
    newAccount.deposit(depositInput);
    $(".balance").text(newAccount.balance);
    $("#deposit").val("");

    if (!(newAccount.overdrawn())){
      $(".balance").removeClass("negBalance")
      $(".moe").hide();
    }
  });

  //withdraw funds
  $(".withdraw").click(function(event) {
    event.preventDefault();
    if (!newAccount.overdrawn()){
      var withdrawInput = parseInt($("#withdraw").val());
      newAccount.withdraw(withdrawInput);
      $(".balance").text(newAccount.balance);
      $("#withdraw").val("")


      if (newAccount.overdrawn()) {
        $(".balance").addClass("negBalance");

      }
    } else {
      $(".moe").show();
      $("#withdraw").val("")
    }
  });

});
