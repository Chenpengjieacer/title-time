export default [
    {
        path: 'nearby/:id',
        props: true,
        component: () => import('../../views/homes/chosen/children/nearby.vue'),
    }, {
        path: 'copy/:id',
        props: true,
        component: () => import("../../views/homes/chosen/children/copy.vue")
    }


] 