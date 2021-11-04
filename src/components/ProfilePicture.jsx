import React from "react";
import PropTypes from 'prop-types';

export const ProfilePicture = ({size}) => {
    return(
        <img
            className={`rounded-lg border-solid border-2 border-primary`}
            src={`https://via.placeholder.com/${size=="small"?"32":"80"}`}
        />
    )
};

ProfilePicture.propTypes = {
    // By default, this component returns a component sized 80x80.
    // When small, it returns a component 32x32, as required for thumbnails
    size: PropTypes.oneOf(["small"])
}