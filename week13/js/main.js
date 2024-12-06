class Bank{
    constructor(name, balance = 0){
        this.name = name;
        this.balance = (balance > 0 ? balance : 0);
    }
    save(balance){
        this.balance += balance;
    }
    deposit(balance){
        if(this.balance > balance){
            this.balance -= balance;
        }else{
            console.log(this.name + " hasn't enough money.");
        }
    }
    getName(){
        return this.name;
    }
    getBalance(){
        return this.balance;
    }
}

const input = {
    "Name": ['p1', 'p2', 'p3'],
    "Balance": [100, 500],
}
const accounts = {};

Object.entries(input).map((ele) => ele[1])[0].forEach((ele, i) => {accounts[ele] = new Bank(...[ele, Object.entries(input).map((ele) => ele[1])[1][i]])})

console.log(accounts);

for (const acc in accounts){
    accounts[acc].save(100);
    console.log(accounts[acc].getName() + ": " + accounts[acc].getBalance());
    accounts[acc].deposit(200);
    console.log(accounts[acc].getName() + ": " + accounts[acc].getBalance());
}