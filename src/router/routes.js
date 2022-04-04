// ORIGINAL
// const routes = [
//   {
//     path: "/",
//     component: () => import("layouts/MainLayout.vue"),
//     children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
//   },

//   // Always leave this as last one,
//   // but you can also remove it
//   {
//     path: "/:catchAll(.*)*",
//     component: () => import("pages/ErrorNotFound.vue"),
//   },
// ];

// CERTO
import IndexPage from "../pages/IndexPage";
import PokemonPage from "../pages/PokemonPage";

const routes = [
  {
    path: "/",
    component: IndexPage,
  },
  {
    path: "/:name",
    component: PokemonPage,
  },
];

export default routes;

// const routes = [
//   {
//     path: "/",
//     component: () => import("pages/IndexPage"),
//   },
//   {
//     path: "/:name",
//     component: () => import("pages/PokemonPage"),
//   },
// ];

// export default routes;
