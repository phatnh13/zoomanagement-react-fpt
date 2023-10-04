import AdminNavbar from "./Header/AdminNavbar";
function AdminLayout({children}) {
    return (
        <div>
            <AdminNavbar />
            <div>
                {children}
            </div>
        </div>
    )
}

export default AdminLayout;