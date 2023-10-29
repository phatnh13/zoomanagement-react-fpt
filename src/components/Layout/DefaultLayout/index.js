import Footer from "./Footer/Footer";
import Header from "./Header/Header"
function defaultLayout({children}) {
    
    return (
        <div>
            <Header />
            <div>
            {children}
            </div>
            <Footer />
        </div>
    )
}

export default defaultLayout;