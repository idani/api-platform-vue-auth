export default {
  path: '/products',
  name: 'products',
  component: () => import('../components/product/Layout'),
  redirect: { name: 'ProductList' },
  children: [
    {
      name: 'ProductList',
      path: '',
      component: () => import('../views/product/List')
    },
    {
      name: 'ProductCreate',
      path: 'new',
      component: () => import('../views/product/Create')
    },
    {
      name: 'ProductUpdate',
      path: ':id/edit',
      component: () => import('../views/product/Update')
    },
    {
      name: 'ProductShow',
      path: ':id',
      component: () => import('../views/product/Show')
    }
  ]
};
