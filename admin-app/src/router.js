import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.use(VueRouter);
Vue.use(VueResource);

// Pages
import Auth from "./Pages/Auth/Auth";
  // Products
import ProductsList from "./Pages/Products/ProductsList.vue";
import ProductsAdd from "./Pages/Products/ProductsAdd.vue";
import ProductsEdit from "./Pages/Products/ProductsEdit.vue";
  // News
import NewsList from "./Pages/News/NewsList.vue";
import NewsAdd from "./Pages/News/NewsAdd.vue";  
import NewsEdit from "./Pages/News/NewsEdit.vue";
  // Recipes
import RecipesList from "./Pages/Recipes/RecipesList.vue";  
import RecipesAdd from "./Pages/Recipes/RecipesAdd.vue";
import RecipesEdit from "./Pages/Recipes/RecipesEdit.vue";
  // Feedback
import FeedbackList from "./Pages/Feedbacks/FeedbackList.vue"; 
  // Profile
import Profile from "./Pages/Profile/Profile.vue";  

const routes = [
  {
    path: '/',
    name: 'auth',
    component: Auth,
    meta: {
      isPublic: true
    }
  },
  // products
  {
    path: '/products-list',
    name: 'productsList',
    component: ProductsList,
    meta: {
      isPublic: false
    }
  },
  {
    path: '/products-list/add',
    name: 'productsAdd',
    component: ProductsAdd,
    meta: {
      isPublic: false
    }
  },
  {
    path: '/products-list/:productId',
    name: 'productsEdit',
    component: ProductsEdit,
    meta: {
      isPublic: false
    }
  },
  // news
  {
    path: '/news',
    name: 'newsList',
    component: NewsList,
    meta: {
      isPublic: false
    }
  },
  {
    path: '/news/add',
    name: 'newsAdd',
    component: NewsAdd,
    meta: {
      isPublic: false
    }
  },
  {
    path: '/news/:newsId',
    name: 'newsEdit',
    component: NewsEdit,
    meta: {
      isPublic: false
    }
  },
  // recipes
  {
    path: '/recipes',
    name: 'recipesList',
    component: RecipesList,
    meta: {
      isPublic: false
    }
  },
  {
    path: '/recipes/add',
    name: 'recipesAdd',
    component: RecipesAdd,
    meta: {
      isPublic: false
    }
  },
  {
    path: '/recipes/:recipeId',
    name: 'recipesEdit',
    component: RecipesEdit,
    meta: {
      isPublic: false
    }
  },
  // feedback
  {
    path: '/feedback-list',
    name: 'feedbackList',
    component: FeedbackList,
    meta: {
      isPublic: false
    }
  },
  // profile
  {
    path: '/me',
    name: 'profile',
    component: Profile,
    meta: {
      isPublic: false
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 };
  },
  routes
});

export default router;