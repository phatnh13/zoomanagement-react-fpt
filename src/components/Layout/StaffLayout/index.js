import StaffNavbar from "./Header/StaffNavbar";
function AdminLayout({children}) {
    return (
        <div>
            <StaffNavbar />
            <div>
                {children}
            </div>
        </div>
    )
}

export default AdminLayout;