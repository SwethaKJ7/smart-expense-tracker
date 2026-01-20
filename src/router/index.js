import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import AddExpense from '../views/AddExpense.vue'
import Expenses from '../views/Expenses.vue'

const routes = [
  { path: '/', component: Dashboard },
  { path: '/add-expense', component: AddExpense },
  { path: '/expenses', component: Expenses }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
