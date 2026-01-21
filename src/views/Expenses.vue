<template>
  <div class="container mt-4">
    <h2 class="mb-4">All Expenses</h2>

    <!-- Expenses Table -->
    <div v-if="expenses.length" class="table-responsive">
      <table class="table table-striped table-hover">
        <thead class="table-dark">
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Description</th>
            <th>Amount (₹)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="exp in expenses" :key="exp.id">
            <td>{{ exp.date }}</td>
            <td>{{ exp.category }}</td>
            <td>{{ exp.description }}</td>
            <td>{{ exp.amount }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Empty state -->
    <p v-else class="text-muted">
      No expenses recorded yet.
    </p>
  </div>
</template>


<script>
import ExpenseTable from "@/components/ExpenseTable.vue";
import { getExpenses } from "@/store/expenseStore";

export default {
  name: "Expenses",
  components: { ExpenseTable },

  data() {
    return {
      expenses: [],
    };
  },

  mounted() {
    this.expenses = getExpenses();
  },
};
</script>

