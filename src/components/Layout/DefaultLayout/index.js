import Footer from "./Footer/Footer";
function defaultLayout({children}) {
    
    return (
        <div>
            <div>
            {children}
            </div>
            <Footer />
        </div>
    )
}

export default defaultLayout;