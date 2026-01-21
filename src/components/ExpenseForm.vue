<template>
  <form @submit.prevent="submitExpense">
    <div class="mb-3">
      <label class="form-label">Description</label>
      <input
        type="text"
        v-model="description"
        class="form-control"
        placeholder="Enter description"
        required
      />
    </div>

    <div class="mb-3">
      <label class="form-label">Amount (₹)</label>
      <input
        type="number"
        v-model="amount"
        class="form-control"
        placeholder="Enter amount"
        required
      />
    </div>

    <div class="mb-3">
      <label class="form-label">Date</label>
      <input type="date" v-model="date" class="form-control" required />
    </div>

    <div class="mb-3">
      <label class="form-label">Category</label>
      <select v-model="category" class="form-select" required>
        <option value="">Select category</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Shopping">Shopping</option>
      </select>
    </div>

    <button type="submit" class="btn btn-brand">Add Expense</button>

  </form>
</template>


<script>
export default {
  name: "ExpenseForm",

  data() {
    return {
      description: "",
      amount: "",
      date: "",
      category: "",
    };
  },

  methods: {
    submitExpense() {
      // Emit the expense to parent
      this.$emit("submit-expense", {
        description: this.description,
        amount: Number(this.amount),
        date: this.date,
        category: this.category,
      });

      // Reset form
      this.description = "";
      this.amount = "";
      this.date = "";
      this.category = "";
    },
  },
};
</script>
