//layout
import {AdminLayout} from '../components/Layout/';
import {StaffLayout} from '../components/Layout/';

//Customer
import Home from '../components/Home/Home';
import NoPage from '../components/NoPage';
import Login from '../components/InputPages/Login';
import Hours from '../components/Hours/Hours';
import Map from '../components/Map/Map';
import News from '../components/News/News';
//Booking
import BuyingTicket from '../components/Ticket/BuyingTicket';
import ViewCart from "../components/Ticket/ViewCart";
import BillingAddress from '../components/Ticket/BillingAddress';
import PaymentMethod from '../components/Ticket/PaymentMethod';
import Summary from '../components/Ticket/Summary';

//Admin managing
import StaffManaging from '../components/Admin/StaffManagement/StaffManaging';
import AddStaff from '../components/Admin/StaffManagement/AddStaff';
import UpdateStaff from '../components/Admin/StaffManagement/UpdateStaff';
import SpeciesManaging from '../components/Admin/Species Management/SpeciesManaging';
import AddSpecies from '../components/Admin/Species Management/AddSpecies';
//Staff managing
import ZooTrainerManaging from '../components/Staff/ZooTrainerManagement/ZooTrainerManaging';
import CageManaging from '../components/Staff/CageManagement/CageManaging';

//1

//2
const publicRoutes = [
    { path: '/', component: Home},
    { path: '/login', component: Login},
    { path: '/buyingticket', component: BuyingTicket},
    { path: '/viewcart', component: ViewCart},
    { path: '/billingaddress', component: BillingAddress},
    { path: '/paymentmethod', component: PaymentMethod},
    { path: '/summary', component: Summary},
    { path: '/hours', component: Hours},
    { path: '/map', component: Map},
    { path: '/news', component: News},
    { path: '*', component: NoPage},
]
const privateRoutes = [
    { path: '/admin/staff', component: StaffManaging, layout: AdminLayout},
    { path: '/admin/staff/update', component: UpdateStaff, layout: AdminLayout},
    { path: '/admin/staff/add', component: AddStaff, layout: AdminLayout},
    { path: '/admin/species', component: SpeciesManaging, layout: AdminLayout},
    { path: '/admin/species/add', component: AddSpecies, layout: AdminLayout},
    { path: '/staff/trainer', component: ZooTrainerManaging, layout: StaffLayout},
    { path: '/staff/cage', component: CageManaging, layout: StaffLayout},
]

export { publicRoutes, privateRoutes }