//layout
import { AdminLayout } from '../components/Layout/';
import { StaffLayout } from '../components/Layout/';
import { TicketLayout } from '../components/Layout/';

//Customer
import Home from '../components/Home/Home';
import NoPage from '../components/NoPage';
import Login from '../components/AuthenticationPages/Login';
import Hours from '../components/Hours/Hours';
import Map from '../components/Map/Map';
import News from '../components/News/News';
import AllNews from '../components/News/AllNews';
//Booking
import BuyingTicket from '../components/Ticket/BuyingTicket';
import ViewCart from "../components/Ticket/ViewCart";
import BillingAddress from '../components/Ticket/BillingAddress';
import PaymentMethod from '../components/Ticket/PaymentMethod';
import Summary from '../components/Ticket/Summary';

//UserOverall
import ProfilePage from '../components/AuthenticationPages/ProfilePage';
//Admin managing
import StaffManaging from '../components/Admin/StaffManagement/StaffManaging';
import AddStaff from '../components/Admin/StaffManagement/AddStaff';
import UpdateStaff from '../components/Admin/StaffManagement/UpdateStaff';
import SpeciesManaging from '../components/Admin/Species Management/SpeciesManaging';
import AddSpecies from '../components/Admin/Species Management/AddSpecies';
//Staff managing
import ZooTrainerManaging from '../components/Staff/ZooTrainerManagement/ZooTrainerManaging';
import AddTrainer from '../components/Staff/ZooTrainerManagement/AddTrainer';
import UpdateZooTrainer from '../components/Staff/ZooTrainerManagement/UpdateZooTrainer';
import CageManaging from '../components/Staff/CageManagement/CageManaging';
import AnimalManaging from '../components/Staff/AnimalManagement/AnimalManaging';
import AddAnimal from '../components/Staff/AnimalManagement/AddAnimal';

//1

//2
const publicRoutes = [
    { path: '/', component: Home},
    { path: '/login', component: Login},
    { path: '/hours', component: Hours},
    { path: '/map', component: Map},
    { path: '/news', component: News},
    { path: '/allnews', component: AllNews},
    { path: '*', component: NoPage},
]
const privateRoutes = [
    //UserOverall
    { path: '/profile-trainer', component: ProfilePage, layout: AdminLayout},
    //Admin
    { path: '/profile-admin', component: ProfilePage, layout: AdminLayout},
    { path: '/admin/staff', component: StaffManaging, layout: AdminLayout},
    { path: '/admin/staff/update/', component: UpdateStaff, layout: AdminLayout},
    { path: '/admin/staff/add', component: AddStaff, layout: AdminLayout},
    { path: '/admin/species', component: SpeciesManaging, layout: AdminLayout},
    { path: '/admin/species/add', component: AddSpecies, layout: AdminLayout},
    
    //Staff
    { path: '/profile-staff', component: ProfilePage, layout: StaffLayout},
    { path: '/staff/trainer', component: ZooTrainerManaging, layout: StaffLayout},
    { path: '/staff/trainer/add', component: AddTrainer, layout: StaffLayout},
    { path: '/staff/trainer/update/', component: UpdateZooTrainer, layout: StaffLayout},
    { path: '/staff/area-cage', component: CageManaging, layout: StaffLayout},
    { path: '/staff/animal', component: AnimalManaging, layout: StaffLayout},
    { path: '/staff/animal/add', component: AddAnimal, layout: StaffLayout},
    
    //Customer
    //--Ticket--
    { path: '/buyingticket', component: BuyingTicket, layout: TicketLayout},
    { path: '/viewcart', component: ViewCart, layout: TicketLayout},
    { path: '/billingaddress', component: BillingAddress, layout: TicketLayout},
    { path: '/paymentmethod', component: PaymentMethod, layout: TicketLayout},
    { path: '/summary', component: Summary, layout: TicketLayout},
]

export { publicRoutes, privateRoutes }