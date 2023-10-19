import Footer from "../DefaultLayout/Footer/Footer";
import HeaderCart from "./Header/HeaderCart";
function TicketLayout({children}) {
    return (
        <div>
            <HeaderCart />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default TicketLayout

