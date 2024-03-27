const accountId = 12396
let accountEmail = "mail@google.com"
var accountPassword = 1258963
accountCity = "Mumbai"
let accountState;

// accountId = 123 //not allowed
accountEmail = "test@google.com"
accountPassword = 963
accountCity = "Banglore"

//Prefer not to use var because  it has issue of block scope and functional scope
 
console.table([accountEmail,accountPassword,accountCity,accountState]);