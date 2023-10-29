import HomeNavbar from "./Header/HomeNavbar";
import Footer from "./Footer/Footer";
function defaultLayout({children}) {
    
    return (
        <div>
            <HomeNavbar />
            <div>
            {children}
            </div>
            <Footer />
        </div>
    )
}

export default defaultLayout;