<template>
  <div>
    <!-- Header -->
    <nav class="navbar navbar-expand-lg navbar-dark app-header px-4">
      <div class="container-fluid">
        <!-- Project name -->
        <a class="navbar-brand" href="#">Smart Expense Tracker</a>

        <!-- Desktop buttons only -->
        <div class="collapse navbar-collapse justify-content-end d-none d-lg-flex">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Dashboard</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/add-expense">Add Expense</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/expenses">Expenses</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Main page content: add container here -->
    <div class="container mt-4 mb-5">
      <router-view />
    </div>

    <!-- Mobile footer -->
    <MobileFooter />
  </div>
</template>

<script setup>
import MobileFooter from "@/components/MobileFooter.vue";
</script>
