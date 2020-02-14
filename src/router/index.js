import Vue from 'vue';
import VueRouter from 'vue-router';
import ExpensesList from './../components/pages/ExpensesList.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/expenseslist',
    name: 'ExpensesList',
    component: ExpensesList
  },
]

const router = new VueRouter({
  routes
});

export default router;
