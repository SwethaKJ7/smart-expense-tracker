<template>
  <div class="container mt-4">
    <h2 class="mb-4">Add Expense</h2>

    <div class="card p-4 shadow-sm">
      <!-- Child component emitting submit-expense -->
      <ExpenseForm @submit-expense="handleAddExpense" />
    </div>
  </div>
</template>

<script>
import ExpenseForm from "@/components/ExpenseForm.vue";
import { addExpense } from "@/store/expenseStore";

export default {
  name: "AddExpense",
  components: { ExpenseForm },

  methods: {
    handleAddExpense(expense) {
      // Save expense to store
      addExpense(expense);

      // Navigate to expenses list
      this.$router.push("/expenses");
    },
  },
};
</script>
