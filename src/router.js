import { createRouter, createWebHistory } from "vue-router";

<<<<<<< HEAD
import HomePage from "./pages/HomePage.vue";
import ContactPage from "./pages/ContactPage.vue";
import AboutPage from "./pages/AboutPage.vue";
import ShopPage from "./pages/ShopPage.vue";
=======
import HomePage from "./pages/HomePage.vue"
import ContactPage from "./pages/ContactPage.vue"
import AboutPage from "./pages/AboutPage.vue"
import ShopPage from "./pages/ShopPage.vue"
>>>>>>> 3e7fbecfcf311435919f0a9b38d7ddf9931c159d

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: HomePage,
        },
        {
            path: "/about-us",
            name: "About",
            component: AboutPage,
            
        },
        {
            path: "/shop",
            name: "Shop",
            component: ShopPage,
        },
        {
            path: "/contact",
            name: "Contact",
            component: ContactPage,
        },
<<<<<<< HEAD
        {
            path: "/shop",
            name: "Shop",
            component: ShopPage,
        },
=======
        
>>>>>>> 3e7fbecfcf311435919f0a9b38d7ddf9931c159d
    ]
})