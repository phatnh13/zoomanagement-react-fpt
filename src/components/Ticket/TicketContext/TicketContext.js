import { createContext, useState } from "react";
import BuyingTicket from "../BuyingTicket";
import ViewCart from "../ViewCart";

export const TicketContext = createContext({});

export const TicketProvider = ({ children }) => {
    const [ticket1, setTicket1] = useState({
        count: 0
    })
    return <TicketContext.Provider value={{ticket1, setTicket1}}>
        {children}
    </TicketContext.Provider>
}

<TicketProvider>
    <BuyingTicket />
    <ViewCart />
</TicketProvider>