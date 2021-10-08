import { Home } from '../containers/Home';
import { Settings } from '../containers/Settings';

export default [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/settings',
        component: Settings,
        exact: false,
    }
];
