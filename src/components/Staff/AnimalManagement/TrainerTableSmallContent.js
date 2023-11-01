import React from "react";

const TrainerTableSmallContent = ({user, setTrainerId}) => {
    //Variables

    let handleSelect = () => {
        setTrainerId(user.userId);
    }
    
    return (
        <tr onClick={handleSelect}>
            <td>{user.userId}</td>
            <td>{user.fullName}</td>
        </tr>
        // <h5>row</h5>
    )
}
export default TrainerTableSmallContent;