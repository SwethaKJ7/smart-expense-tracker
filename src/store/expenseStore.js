/**
 * expenseStore.js
 *
 * This file acts as a temporary data layer for the application.
 * It replaces database + API calls during frontend-only development.
 *
 * Later, these functions can be replaced with real API calls
 * without changing component logic.
 */

// In-memory expense list (mock persistence)
let expenses = [
  {
    id: 1,
    date: "2025-01-10",
    category: "Food",
    description: "Lunch",
    amount: 150,
  },
  {
    id: 2,
    date: "2025-01-11",
    category: "Transport",
    description: "Bus",
    amount: 50,
  },
];

/**
 * Get all expenses
 * @returns {Array}
 */
export function getExpenses() {
  return expenses;
}

/**
 * Add a new expense
 * @param {Object} expense
 */
export function addExpense(expense) {
  expense.id = Date.now(); // temporary unique ID
  expenses.push(expense);
}
