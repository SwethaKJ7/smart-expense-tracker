<template>
  <!-- 
    ExpenseTable is a PRESENTATIONAL component.
    It receives expense data via props and renders a table.
    No API calls or business logic should exist here.
  -->
  <table v-if="expenses.length" border="1" cellpadding="8">
    <thead>
      <tr>
        <th>Date</th>
        <th>Category</th>
        <th>Description</th>
        <th>Amount</th>
      </tr>
    </thead>

    <tbody>
      <!-- 
        Loop through expenses and render each row.
        :key improves rendering performance.
      -->
      <tr v-for="expense in expenses" :key="expense.id">
        <td>{{ formatDate(expense.date) }}</td>
        <td>{{ expense.category }}</td>
        <td>{{ expense.description || "-" }}</td>
        <td>{{ formatAmount(expense.amount) }}</td>
      </tr>
    </tbody>
  </table>

  <!-- 
    Shown when there are no expenses.
    Improves user experience.
  -->
  <p v-else>No expenses recorded yet.</p>
</template>

<script>
export default {
  name: "ExpenseTable",

  /*
    Props define the input data for this component.
    Parent component is responsible for fetching expenses.
  */
  props: {
    expenses: {
      type: Array,
      required: true,
      default: () => [],
    },
  },

  methods: {
    /*
      Formats the date into a readable format.
      Can be enhanced later (locale support).
    */
    formatDate(date) {
      if (!date) return "-";
      return new Date(date).toLocaleDateString();
    },

    /*
      Formats amount with currency symbol.
      Keeps UI consistent.
    */
    formatAmount(amount) {
      return `₹${Number(amount).toFixed(2)}`;
    },
  },
};
</script>

<style scoped>
/* Basic table styling */
table {
  width: 100%;
  border-collapse: collapse;
}

th {
  background-color: #f4f4f4;
  text-align: left;
}

td,
th {
  padding: 8px;
}
</style>
