import StaffNavbar from "./Header/StaffNavbar";
function StaffLayout({children}) {
    return (
        <div>
            <StaffNavbar />
            <div>
                {children}
            </div>
        </div>
    )
}

export default StaffLayout;