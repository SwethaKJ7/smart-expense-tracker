<template>
  <footer class="mobile-footer d-lg-none">
    <router-link to="/" class="footer-btn">
      <i class="bi bi-house-fill"></i>
      <span class="small">Dashboard</span>
    </router-link>
    <router-link to="/add-expense" class="footer-btn">
      <i class="bi bi-plus-circle-fill"></i>
      <span class="small">Add Expense</span>
    </router-link>
    <router-link to="/expenses" class="footer-btn">
      <i class="bi bi-list-ul"></i>
      <span class="small">Expenses</span>
    </router-link>
  </footer>
</template>

<script setup></script>
