// ASSIGNMENT 2 - OA BLOM

const account = {
  accountName: "Oa",
  getName: function () {
    return this.accountName;
  },
  balance: 100,
  getBalance: function () {
    return this.balance;
  },
  deposit: function (insert) {
    if (insert > 0) {
      this.balance = this.balance + insert;
      return insert;
    }
  },
  withdrawal: function (cashOut) {
    {
      this.balance = this.balance - cashOut;
      return cashOut;
    }
  },
  getAccountName: function () {
    return this.getName();
  },
  accountError: function () {},
  exitAccount: function () {},
};

function atm() {
  let choice = prompt(
    "Select a choice: 1.) See balance 2.) Make a deposit 3.) Make a withdrawal 4.) Get account name 5. Exit"
  ); //parseInt gör att du kan skriva in nummer

  if (choice < 6 && choice > 0) {
    switch (
      choice // Jag  valde switch för att det är så många alternativ och jag använder if/else i dessa. Känns mindre rörigt om jag har case för varje alternativ och sedan if/else under varje case istllet för flera if/else med if/else i sig.
    ) {
      case "1":
        prompt(`Your balance is ${account.getBalance()} SEK.`);
        location.reload(choice);
        break;
      case "2":
        let deposit = account.deposit(
          parseInt(prompt(`How much would you like to deposit?`))
        );
        if (deposit >= 1) {
          confirm(
            `You successfully deposited ${deposit} SEK into your account. You now have ${account.getBalance()} SEK on your bank account.`
          );
          location.reload();
        } else {
          confirm("You need to enter a positive number value.");
          location.reload();
        }
        break;
      case "3":
        if (account.getBalance() <= 0) {
          confirm(
            `Your bank account is empty! This ain't no charity! Make a deposit before you try to withdraw!`
          );
        } else {
          let withdraw = account.withdrawal(
            parseInt(
              prompt(
                `You have ${account.getBalance()} SEK on your account. How much would you like to witdraw?`
              )
            )
          );
          if (withdraw <= account.getBalance() + withdraw) {
            confirm(
              `Here is your ${withdraw} SEK. You now have. You now have ${account.getBalance()} SEK left on your bank account.`
            );
          } else {
            confirm(
              `${withdraw} SEK is more than you have on your bank account. Please try an amount that doesn't exceed ${
                account.getBalance() + withdraw
              } SEK.`
            );
            account.withdrawal(-1 * withdraw);
          }
        }
        break;
      case "4":
        window.confirm(`Your account name is ${account.getAccountName()}.`);
        location.reload();
        break;
      case "5":
        if (window.confirm("Do you really want to leave?")) {
          return window.close();
          ` `; //Varför måste jag ha return här?
        } else {
          location.reload();
        }
        break;
    }
    atm();
  } else {
    confirm("You have to choose a number between 1 and 5.");
    return location.reload(); //Varför måste jag ha return här?
  }
}

atm();
