import Footer from "../DefaultLayout/Footer/Footer";
function TicketLayout({children}) {
    return (
        <div>
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default TicketLayout;