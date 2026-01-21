<template>
  <div class="dashboard-container">
    <h2 class="page-title">Dashboard</h2>
    <p class="subtitle">Overview of your spending</p>

    <!-- Summary Cards -->
    <div class="cards">
      <div class="card">
        <h5>Total Expenses</h5>
        <div class="value">₹ {{ totalAmount }}</div>
      </div>

      <div class="card">
        <h5>Total Entries</h5>
        <div class="value">{{ totalCount }}</div>
      </div>

      <div class="card">
        <h5>Categories</h5>
        <div class="value">{{ categories.length }}</div>
      </div>
    </div>

    <!-- Chart Section -->
    <div v-if="expenses.length" class="chart-card">
      <ExpenseChart
        :labels="categories"
        :values="amounts"
        title="Expenses by Category"
      />
    </div>

    <!-- Empty State -->
    <p v-else class="empty">
      No expenses added yet. Add an expense to see insights.
    </p>
  </div>
</template>


<script>
import ExpenseChart from "@/components/charts/ExpenseChart.vue";
import { getExpenses } from "@/store/expenseStore";

export default {
  name: "Dashboard",
  components: { ExpenseChart },

  data() {
    return {
      expenses: [],
    };
  },

  mounted() {
    // Fetch expenses from in-memory store
    this.expenses = getExpenses();
  },

  computed: {
    // Unique categories
    categories() {
      return [...new Set(this.expenses.map(e => e.category))];
    },

    // Total amount per category (for chart)
    amounts() {
      return this.categories.map(cat =>
        this.expenses
          .filter(e => e.category === cat)
          .reduce((sum, e) => sum + Number(e.amount), 0)
      );
    },

    // Total expense amount
    totalAmount() {
      return this.expenses.reduce(
        (sum, e) => sum + Number(e.amount),
        0
      );
    },

    // Total number of expenses
    totalCount() {
      return this.expenses.length;
    },
  },
};
</script>

