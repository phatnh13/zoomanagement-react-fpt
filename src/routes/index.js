//layout
import {AdminLayout} from '../components/Layout/';
import {StaffLayout} from '../components/Layout/';

import Home from '../components/Home/Home';
import NoPage from '../components/NoPage';
import Login from '../components/InputPages/Login';
import StaffManaging from '../components/Admin/StaffManagement/StaffManaging';
import SpeciesManaging from '../components/Admin/Species Management/SpeciesManaging';
import ZooTrainerManaging from '../components/Staff/ZooTrainerManagement/ZooTrainerManaging';
import CageManaging from '../components/Staff/CageManagement/CageManaging';


const publicRoutes = [
    { path: '/', component: Home},
    { path: '/login', component: Login},
    { path: '*', component: NoPage},
]
const privateRoutes = [
    { path: '/admin/staff', component: StaffManaging, layout: AdminLayout},
    { path: '/admin/species', component: SpeciesManaging, layout: AdminLayout},
    { path: '/staff/trainer', component: ZooTrainerManaging, layout: StaffLayout},
    { path: '/staff/cage', component: CageManaging, layout: StaffLayout},
]

export { publicRoutes, privateRoutes }