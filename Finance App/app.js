let income = 0;
    let expenses = [];

    function addIncome() {
        let incomeInput = document.getElementById("incomeInput").value;
        if (incomeInput !== "") {
            income += parseFloat(incomeInput);
            updateList();
            updateAccountDetails();
        }
    }

    function addExpense() {
        let expenseInput = document.getElementById("expenseInput").value;
        if (expenseInput !== "") {
            expenses.push(parseFloat(expenseInput));
            updateList();
            updateAccountDetails();
        }
    }

    function updateList() {
        let list = document.getElementById("list");
        list.innerHTML = "";

        let listItem = document.createElement("li");
        listItem.textContent = "Total Income: $" + income.toFixed(2);
        list.appendChild(listItem);
    }

    function updateAccountDetails() {
        let totalIncomeElement = document.getElementById("totalIncome");
        let totalExpensesElement = document.getElementById("totalExpenses");
        let currentBalanceElement = document.getElementById("currentBalance");

        totalIncomeElement.textContent = "$" + income.toFixed(2);

        let totalExpenses = expenses.reduce((acc, val) => acc + val, 0);
        totalExpensesElement.textContent = "$" + totalExpenses.toFixed(2);

        let currentBalance = income - totalExpenses;
        currentBalanceElement.textContent = "$" + currentBalance.toFixed(2);
    }