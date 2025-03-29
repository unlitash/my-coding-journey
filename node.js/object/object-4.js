let myAccount = {
    Name: "Ashkan",
    Income: 0 ,
    expence: 0 ,
}

let Addincome = function ( account , amount) {
    account.Income = account.Income + amount;
}

let Addexpence = function (account , amount) {
    account.expence = account.Income - amount;
    // or account.expence = account.expence + amount;

}

let accountReport = function (account) {
    report = `ACCOUNT REPORT: account ID: ${account.Name} has income of: ${account.Income} and expences of: ${account.expence} account balance: ${account.Income - account.expence}`
    console.log (report)
}

let accountReset = function (account) {
    account.Name = "Ashkan"
    account.Income = (account.Income - account.Income)
    account.expence = (account.expence - account.expence
    )
    //or:
    //account.Name = "Ashkan"
    //account.Income = 0
    //account.expence = 0
}

console.log(myAccount)
Addincome(myAccount , 100)
console.log(myAccount)
Addexpence(myAccount , 50)
console.log(myAccount)
accountReport(myAccount)
console.log(myAccount)
accountReset(myAccount)
console.log(myAccount)
// call by referece