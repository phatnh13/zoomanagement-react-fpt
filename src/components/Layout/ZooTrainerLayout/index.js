import TrainerNavbar from "./Header/TrainerNavbar";
function TrainerLayout({children}) {
    return (
        <div>
            <TrainerNavbar />
            <div>
                {children}
            </div>
        </div>
    )
}

export default TrainerLayout;