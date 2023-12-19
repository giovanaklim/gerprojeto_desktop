//https://pt.wix.com/website-template/view/html/2035?originUrl=https%3A%2F%2Fpt.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Fbusiness%2Fservices-maintenance&tpClick=view_button&esi=e11a763d-b4e6-4f8a-a963-0bbc37f23d09
const routes = [
  {
    path: '/login', component: () => import('pages/Login.vue')
  },
  {
    path: '/register', component: () => import('pages/Register.vue')
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/nova-obra', component: () => import('pages/NewProject.vue') },
      { path: '/projetos-em-andamento', component: () => import('pages/InProgress.vue') },
      { path: '/projetos-concluidos', component: () => import('pages/Completed.vue') },
      { path: '/equipe', component: () => import('pages/Teams.vue') },
      { path: '/minha-conta', component: () => import('pages/MyAccount.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
