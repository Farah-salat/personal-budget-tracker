// Verified production build v1.2 — Number() expense parsing confirmed active

/* ==========================================================================
   SPENDWISE - BUDGET TRACKER LOGIC
   Handles state management, array operations, DOM updates, and event listeners.
   ========================================================================== */

// --- 1. STATE & DATA STRUCTURES ---
// Initial budget state
let totalBudget = 0;

// Array of expense objects to store multiple records
let expenses = [
    { id: 1, name: "Rent & Utilities", amount: 15000, category: "Housing" },
    { id: 2, name: "Supermarket Run", amount: 4500, category: "Food" },
    { id: 3, name: "Matatu / Bus Pass", amount: 1200, category: "Transport" }
];

// --- 2. DOM ELEMENT REFERENCES ---
// Form elements
const budgetInput = document.getElementById("budget-input");
const setBudgetBtn = document.getElementById("set-budget-btn");

const expenseForm = document.getElementById("expense-form");
const expenseNameInput = document.getElementById("expense-name");
const expenseAmountInput = document.getElementById("expense-amount");
const expenseCategorySelect = document.getElementById("expense-category");

// Dashboard summary elements
const totalBudgetDisplay = document.getElementById("total-budget-display");
const totalExpensesDisplay = document.getElementById("total-expenses-display");
const remainingBalanceDisplay = document.getElementById("remaining-balance-display");
const budgetStatusBanner = document.getElementById("budget-status-banner");

// Category breakdown elements
const categoryHousingDisplay = document.getElementById("category-housing-total");
const categoryFoodDisplay = document.getElementById("category-food-total");
const categoryTransportDisplay = document.getElementById("category-transport-total");

// Table body element
const expenseTableBody = document.getElementById("expense-table-body");

// --- 3. HELPER FUNCTIONS & LOGIC ---

/**
 * Calculates total expenses using a loop over the expenses array.
 * @returns {number} Sum of all expense amounts
 */
function calculateTotalExpenses() {
    let sum = 0;
    // Processing data using a loop (Requirement 3)
    for (let i = 0; i < expenses.length; i++) {
        sum += expenses[i].amount;
    }
    return sum;
}

/**
 * Calculates expenses for a specific category using a loop.
 * @param {string} category 
 * @returns {number} Total expenses for given category
 */
function calculateCategoryTotal(category) {
    let sum = 0;
    for (let i = 0; i < expenses.length; i++) {
        if (expenses[i].category.toLowerCase() === category.toLowerCase()) {
            sum += expenses[i].amount;
        }
    }
    return sum;
}

/**
 * Renders the expense array into HTML table rows dynamically.
 */
function renderExpenseTable() {
    // Clear existing content
    expenseTableBody.innerHTML = "";

    // Check if there are no expenses
    if (expenses.length === 0) {
        expenseTableBody.innerHTML = `<tr><td colspan="4" style="text-align: center;">No expenses recorded yet.</td></tr>`;
        return;
    }

    // Loop through expenses array and create DOM elements
    for (let i = 0; i < expenses.length; i++) {
        const item = expenses[i];
        const row = document.createElement("tr");

        row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.category}</td>
      <td>KSh ${item.amount.toLocaleString()}</td>
      <td>
        <button class="delete-btn" data-id="${item.id}" style="background-color: #e53935; padding: 6px 12px; font-size: 12px;">Delete</button>
      </td>
    `;

        expenseTableBody.appendChild(row);
    }
}

/**
 * Evaluates budget decision logic using conditionals and updates UI feedback.
 */
function updateDashboardMetrics() {
    const totalExpenses = calculateTotalExpenses();
    const remainingBalance = totalBudget - totalExpenses;

    // Update Summary DOM metrics
    totalBudgetDisplay.textContent = `KSh ${totalBudget.toLocaleString()}`;
    totalExpensesDisplay.textContent = `KSh ${totalExpenses.toLocaleString()}`;
    remainingBalanceDisplay.textContent = `KSh ${remainingBalance.toLocaleString()}`;

    // Update Category Totals
    categoryHousingDisplay.textContent = `KSh ${calculateCategoryTotal("Housing").toLocaleString()}`;
    categoryFoodDisplay.textContent = `KSh ${calculateCategoryTotal("Food").toLocaleString()}`;
    categoryTransportDisplay.textContent = `KSh ${calculateCategoryTotal("Transport").toLocaleString()}`;

    // Requirement 1: Implement Decision Making via Conditionals
    if (totalBudget === 0) {
        budgetStatusBanner.textContent = "Please set your monthly budget to begin tracking.";
        budgetStatusBanner.style.color = "var(--secondary-text)";
    } else if (remainingBalance < 0) {
        budgetStatusBanner.textContent = "⚠️ Warning: You have exceeded your allocated budget!";
        budgetStatusBanner.style.color = "#d32f2f";
    } else if (remainingBalance <= totalBudget * 0.2) {
        budgetStatusBanner.textContent = "⚡ Caution: You have spent over 80% of your budget.";
        budgetStatusBanner.style.color = "#f57c00";
    } else {
        budgetStatusBanner.textContent = "✅ Great job! Your spending is within healthy limits.";
        budgetStatusBanner.style.color = "var(--accent-color)";
    }
}

/**
 * Central render function to synchronize data and DOM.
 */
function refreshAppUI() {
    renderExpenseTable();
    updateDashboardMetrics();
}

// --- 4. EVENT LISTENERS (User Interactions) ---

// Set Budget Handler
setBudgetBtn.addEventListener("click", function () {
    const inputVal = Number(budgetInput.value);

    // Conditional validation
    if (isNaN(inputVal) || inputVal <= 0) {
        alert("Please enter a valid budget amount greater than 0.");
        return;
    }

    totalBudget = inputVal;
    budgetInput.value = "";
    refreshAppUI();
});

// Add New Expense Handler
expenseForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = expenseNameInput.value.trim();
    const amount = Number(expenseAmountInput.value);
    const category = expenseCategorySelect.value;

    // Decision logic for form validation
    if (name === "" || isNaN(amount) || amount <= 0 || category === "") {
        alert("Please fill in all fields with valid information.");
        return;
    }

    // Add new item to array (Requirement 2)
    const newExpense = {
        id: Date.now(),
        name: name,
        amount: amount,
        category: category
    };

    expenses.push(newExpense);

    // Clear inputs
    expenseNameInput.value = "";
    expenseAmountInput.value = "";
    expenseCategorySelect.value = "";

    // Trigger UI update flow
    refreshAppUI();
});

// Delete Expense Handler (Event Delegation)
expenseTableBody.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) {
        const idToDelete = Number(event.target.getAttribute("data-id"));

        // Filter array to remove item
        expenses = expenses.filter(function (item) {
            return item.id !== idToDelete;
        });

        // Refresh display
        refreshAppUI();
    }
});

// --- 5. INITIALIZATION ---
// Render initial state on page load
document.addEventListener("DOMContentLoaded", function () {
    refreshAppUI();
});
