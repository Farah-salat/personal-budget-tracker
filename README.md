# SpendWise: Personal Budget Tracker

SpendWise is an interactive, web-based personal finance dashboard built using HTML, CSS, and vanilla JavaScript. It helps users establish monthly budget targets, track daily expenses, categorize expenditures, and monitor their remaining financial balance in real time.

---

## Technical Overview & Week 6 Improvements

This week, SpendWise was evolved from a static page layout into a fully dynamic, event-driven web application. The primary technical additions include:

- **Interactive State Management**: Replaced hardcoded values and static popups with real-time DOM form controls and structured data handling.
- **Array-Based Expense Tracking**: Integrated dynamic array storage for recording, displaying, and removing expenses without reloads.
- **Automated Summary Calculations**: Implemented loop-driven calculations for dynamic total expenses, category totals, and remaining balance updates.
- **Custom High-Contrast Dark Theme**: Upgraded system dark mode styling (`prefers-color-scheme: dark`) with slate and emerald tones for accessible contrast across all dashboard components.

---

## Technical Implementations

### 1. How Conditionals Are Used
Conditional statements (`if / else if / else`) govern validation rules and real-time budget health feedback:
- **Input Validation**: Ensures budget targets and expense amounts are valid, positive numeric values before updating application state.
- **Budget Decision Logic**: Dynamically evaluates the user's remaining balance relative to their total budget:
  ```javascript
  if (totalBudget === 0) {
      budgetStatusBanner.textContent = "Please set your monthly budget to begin tracking.";
  } else if (remainingBalance < 0) {
      budgetStatusBanner.textContent = "⚠️ Warning: You have exceeded your allocated budget!";
  } else if (remainingBalance <= totalBudget * 0.2) {
      budgetStatusBanner.textContent = "⚡ Caution: You have spent over 80% of your budget.";
  } else {
      budgetStatusBanner.textContent = "✅ Great job! Your spending is within healthy limits.";
  }