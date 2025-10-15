class Wallet {
    #balance = 0;
    #transactions = []

    deposit(amount){
        this.#processDeposit(amount)
        this.#balance += amount;
    }

    withdraw(amount){
        if(amount > this.#balance){
            console.log('Not enough funds');
            return;
        }

        this.#processWithdraw(amount)
        this.#balance -= amount
    }

    #processDeposit(amount){
        console.log(`Depositing ${amount}`);
        this.#transactions.push({
            type: 'Deposit',
            amount
        })
    }

    #processWithdraw(amount){
        console.log(`Withdrawing ${amount}`);
        this.#transactions.push({
            type: 'Withdraw',
            amount
        })
    }



    get balance(){
        return this.#balance
    }

    get transactions(){
        return this.#transactions
    }
}

const wallet = new Wallet()
wallet.deposit(500)
wallet.withdraw(100)
console.log(wallet.balance);