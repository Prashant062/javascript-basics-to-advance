const accountId = 144553
let accountEmail = "prashant@google.com"
var accountPassword = "12345"
accountCity = "Lucknow"
let accountState;

// accountId = 2 // not allowed


accountEmail = "pr@pr.com"
accountPassword = "21212121"
accountCity = "Noida"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])