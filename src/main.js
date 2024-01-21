import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import FeedPage from './pages/FeedPage.vue';
import ItineraryPage from './pages/ItineraryPage.vue';
import MyItineraryPage from './pages/MyItineraryPage.vue'
import ActivityPage from './pages/ActivityPage.vue'

const routes = [
  { path: '/', component: FeedPage },
  { path: '/itineraries/:id', component: ItineraryPage, props: true },
  { path: '/my-itinerary/:id', component: MyItineraryPage, props: true},
  { path: '/activities', component: ActivityPage, props: true}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App)

app.use(router)

app.mount('#app')
