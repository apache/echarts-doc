
const routes = [
    {
        path: '/',
        // TODO
        redirect: '/edit/en/series.bar'
    },

    {
        path: '/edit/:language/',
        component: () => import('layouts/EditorLayout.vue'),
        props: true,
        children: [
            // { path: 'index', component: () => import('pages/Index.vue') },
            { path: '/edit/:language/:docPath', component: () => import('pages/DocBlockEditor.vue'), props: true }
        ]
    },

    {
        path: '/conflicts',
        component: () => import('pages/Conflicts.vue')
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '*',
        component: () => import('pages/Error404.vue')
    }
];

export default routes;
