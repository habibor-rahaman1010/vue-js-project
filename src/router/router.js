import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/team',
    name: 'Team',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Team.vue'),
    meta: {
      title: 'Team'
    }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
    meta: {
      title: 'Projects'
    }
  },
  {
    path: '/about-us',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      title: 'About'
    }
  },

  {
    path: '/foods',
    name: 'Foods',
    component: () => import('../components/foods/Foods.vue'),
    meta: {
      title: 'Foods'
    }
  },

  {
    path: '/all-foods',
    name: 'AllFoods',
    component: () => import('../components/foods/AllFoods.vue'),
    meta: {
      title: 'AllFoods'
    }
  },

  {
    path: '/all-foods/food-details/:id',
    name: 'FoodDetails',
    component: () => import('../components/foods/FoodDetails.vue'),
    meta: {
      title: 'FoodDetails'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
