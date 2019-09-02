import Vue from 'vue';
import VueRouter from 'vue-router';

import Main from './Pages/Main/Main';
import About from './Pages/About/About';
import Consumers from './Pages/Consumers/Consumers';
import Contacts from './Pages/Contacts/Contacts';
import Partners from './Pages/Partners/Partners';
import Products from './Pages/Products/Products';
import News from './Pages/News/News';
import New from './Pages/News/New';
import Recipes from './Pages/Recipes/Recipes';
import Recipe from './Pages/Recipes/Recipe';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    meta: {
      showFeedback: false
    }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      showFeedback: true
    }
  },
  {
    path: '/consumers',
    name: 'consumers',
    component: Consumers,
    meta: {
      showFeedback: true
    }
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts,
    meta: {
      showFeedback: true
    }
  },
  {
    path: '/partners',
    name: 'partners',
    component: Partners,
    meta: {
      showFeedback: true
    }
  },
  {
    path: '/products',
    name: 'products',
    component: Products,
    meta: {
      showFeedback: true
    }
  },
  {
    path: '/news',
    name: 'news',
    component: News,
    meta: {
      showFeedback: true
    }
  },
  {
    path: '/news/:new_id',
    name: 'new',
    component: New,
    meta: {
      showFeedback: true
    }
  },
  {
    path: '/recipes',
    name: 'recipes',
    component: Recipes,
    meta: {
      showFeedback: true
    }
  },
  {
    path: '/recipes/:recipe_id',
    name: 'recipe',
    component: Recipe,
    meta: {
      showFeedback: true
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes
});

export default router;