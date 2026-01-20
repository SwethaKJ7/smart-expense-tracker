<script setup>
</script>

<template>
  <div>
    <h1>Smart Expense Tracker</h1>

    <nav style="margin-bottom: 16px;">
      <router-link to="/">Dashboard</router-link> |
      <router-link to="/add-expense">Add Expense</router-link> |
      <router-link to="/expenses">Expenses</router-link>
    </nav>

    <router-view />
  </div>
</template>

<style scoped>
nav a {
  margin-right: 8px;
}
</style>
