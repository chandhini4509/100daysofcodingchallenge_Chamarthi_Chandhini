const financeTracker = () => {
    let bal = 0;
    
    return {
        addIncome: amount => bal += amount,
        addExpense: amount => bal -= amount,
        CurBal: () => bal
    };
};

const myfin = financeTracker();
myfin.addIncome(5000);
myfin.addExpense(250);
console.log(`Current balance: $${myfin.CurBal()}`);