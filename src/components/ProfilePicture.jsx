import React from "react";

export const ProfilePicture = ({size}) => {
    return(
        <img
            className={`rounded-lg border-solid border-2 border-primary`}
            src={`https://via.placeholder.com/${size=="small"?"80":"32"}`}
        />
    )
}