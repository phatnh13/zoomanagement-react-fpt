//layout
import {AdminLayout} from '../components/Layout/';
import {StaffLayout} from '../components/Layout/';

import Home from '../components/Home/Home';
import NoPage from '../components/NoPage';
import Login from '../components/InputPages/Login';
import ZooTrainerManaging from '../components/Staff/ZooTrainerManagement/ZooTrainerManaging';
//Admin managing
import StaffManaging from '../components/Admin/StaffManagement/StaffManaging';
import AddStaff from '../components/Admin/StaffManagement/AddStaff';
import UpdateStaff from '../components/Admin/StaffManagement/UpdateStaff';
import SpeciesManaging from '../components/Admin/Species Management/SpeciesManaging';
//Staff managing
import CageManaging from '../components/Staff/CageManagement/CageManaging';


const publicRoutes = [
    { path: '/', component: Home},
    { path: '/login', component: Login},
    { path: '*', component: NoPage},
]
const privateRoutes = [
    { path: '/admin/staff', component: StaffManaging, layout: AdminLayout},
    { path: '/admin/staff/update', component: UpdateStaff, layout: AdminLayout},
    { path: '/admin/staff/add', component: AddStaff, layout: AdminLayout},
    { path: '/admin/species', component: SpeciesManaging, layout: AdminLayout},
    { path: '/admin/species/add', component: SpeciesManaging, layout: AdminLayout},
    { path: '/staff/trainer', component: ZooTrainerManaging, layout: StaffLayout},
    { path: '/staff/cage', component: CageManaging, layout: StaffLayout},
]

export { publicRoutes, privateRoutes }