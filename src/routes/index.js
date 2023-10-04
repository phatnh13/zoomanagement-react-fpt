import Home from '../components/Home/Home';
import NoPage from '../components/NoPage';
import Login from '../components/InputPages/Login';
import Admin from '../components/Admin/Admin';

//layout
import {AdminLayout} from '../components/Layout/';

const publicRoutes = [
    { path: '/', component: Home},
    { path: '/login', component: Login},
    { path: '*', component: NoPage},
]
const privateRoutes = [
    { path: '/admin', component: Admin, layout: AdminLayout},

]

export { publicRoutes, privateRoutes }