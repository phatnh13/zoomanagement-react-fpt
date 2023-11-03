//layout
import { AdminLayout } from '../components/Layout/';
import { StaffLayout } from '../components/Layout/';
import { TrainerLayout } from '../components/Layout/';
import { TicketLayout } from '../components/Layout/';
import { HomeLayout } from '../components/Layout/';
//Customer
import Home from '../components/Home/Home';
import NoPage from '../components/NoPage';
import Login from '../components/AuthenticationPages/Login';
import Hours from '../components/Hours/Hours';
import Map from '../components/Map/Map';
import Species from '../components/Map/Species';
import News from '../components/News/News';
import ZooNews from '../components/News/ZooNews';
import ViewTicket from '../components/Ticket/ViewTicket/ViewTicket';
import SearchOrder from '../components/Ticket/SearchOrder/SearchOrder';
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
import NewsManaging from '../components/Staff/NewsManagement/NewsManaging';
import AddNews from '../components/Staff/NewsManagement/AddNews';
import UpdateNews from '../components/Staff/NewsManagement/UpdateNews';
import ViewNews from '../components/Staff/NewsManagement/ViewNews';
//Trainer managing
import AnimalStatusManaging from '../components/ZooTrainer/AnimalManagement/AnimalStatusManaging';
import MealManaging from '../components/ZooTrainer/MealManagement/MealManaging';
import AddMeal from '../components/ZooTrainer/MealManagement/AddMeal';
import SkillManaging from '../components/ZooTrainer/SkillManagement/SkillManaging';

const publicRoutes = [
    
    { path: '/login', component: Login},
    { path: '/opening-hours', component: Hours, layout: HomeLayout},
    { path: '/map', component: Map, layout: HomeLayout},
    { path: '/species', component: Species, layout: HomeLayout},
    { path: '/news', component: News, layout: HomeLayout},
    { path: '/zoo-news', component: ZooNews, layout: HomeLayout},
    { path: '*', component: NoPage},

    //Customer
    //--Ticket--
    { path: '/buyingticket', component: BuyingTicket, layout: TicketLayout},
    { path: '/viewcart', component: ViewCart, layout: TicketLayout},
    { path: '/billingaddress', component: BillingAddress, layout: TicketLayout},
    { path: '/paymentmethod', component: PaymentMethod, layout: TicketLayout},
    { path: '/summary', component: Summary, layout: TicketLayout},
    { path: '/viewticket', component: ViewTicket, layout: TicketLayout},
    //--Home--
    { path: '/', component: Home, layout: HomeLayout},
    { path: '/searchorder', component: SearchOrder, layout: HomeLayout},

]
const adminRoutes = [
    { path: '/admin/profile', component: ProfilePage, layout: AdminLayout},
    { path: '/admin/staff', component: StaffManaging, layout: AdminLayout},
    { path: '/admin/staff/update/', component: UpdateStaff, layout: AdminLayout},
    { path: '/admin/staff/add', component: AddStaff, layout: AdminLayout},
    { path: '/admin/species', component: SpeciesManaging, layout: AdminLayout},
    { path: '/admin/species/add', component: AddSpecies, layout: AdminLayout},
]
const staffRoutes = [
    { path: '/staff/profile', component: ProfilePage, layout: StaffLayout},
    { path: '/staff/trainer', component: ZooTrainerManaging, layout: StaffLayout},
    { path: '/staff/trainer/add', component: AddTrainer, layout: StaffLayout},
    { path: '/staff/trainer/update/', component: UpdateZooTrainer, layout: StaffLayout},
    { path: '/staff/area-cage', component: CageManaging, layout: StaffLayout},
    { path: '/staff/animal', component: AnimalManaging, layout: StaffLayout},
    { path: '/staff/animal/add', component: AddAnimal, layout: StaffLayout},
    { path: '/staff/news', component: NewsManaging, layout: StaffLayout},
    { path: '/staff/news/add', component: AddNews, layout: StaffLayout},
    { path: '/staff/news/update/', component: UpdateNews, layout: StaffLayout},
    { path: '/staff/news/view/:newsId', component: ViewNews, layout: StaffLayout},
]
const trainerRoutes = [
    { path: '/trainer/profile', component: ProfilePage, layout: TrainerLayout},
    { path: '/trainer/animal', component: AnimalStatusManaging, layout: TrainerLayout},
    { path: '/trainer/meals/:animalId', component: MealManaging, layout: TrainerLayout},
    { path: '/trainer/meals/add', component: AddMeal, layout: TrainerLayout},
    { path: '/trainer/skills', component: SkillManaging, layout: TrainerLayout},
]

export { publicRoutes, adminRoutes, staffRoutes, trainerRoutes }