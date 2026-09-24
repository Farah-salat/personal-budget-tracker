console.log("SpendWise JavaScript is running.");

let budget = prompt("Enter your total budget in KSh:");

console.log("Budget entered:", budget);

// Small delay before showing the second popup
setTimeout(function () {
    let expenses = prompt("Enter your total expenses in KSh:");

    console.log("Expenses entered:", expenses);

    let budgetAmount = Number(budget);
    let expensesAmount = Number(expenses);

    function calculateBalance(budget, expenses) {
        return budget - expenses;
    }

    let remainingBalance = calculateBalance(
        budgetAmount,
        expensesAmount
    );

    console.log("===== SpendWise Budget Summary =====");
    console.log("Total Budget: KSh " + budgetAmount);
    console.log("Total Expenses: KSh " + expensesAmount);
    console.log("Remaining Balance: KSh " + remainingBalance);
    console.log("====================================");

}, 500);