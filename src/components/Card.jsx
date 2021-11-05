import React from "react";
import PropTypes from "prop-types";
import {ProfilePicture} from "./ProfilePicture";

export const Card = ({}) => {

    return(
        <div className="card bg-gray-600 rounded-lg p-6 mb-4 flex flex-col justify-center content-center">
            <div className="flex justify-between mb-4">
                <ProfileItem/>
                <div className="delete flex flex-col justify-center text-xs font-light">Delete</div>
            </div>
            <div className="description mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sodales lectus gravida
            </div>
            <div className="subcard bg-gray-800 p-4 rounded-lg">
                <div className="card-subcard-buy flex justify-between mb-4">
                    <div className="flex flex-col justfy-start w-3/5">
                    <div className="font-light">
                        Buy 1 BTC at
                    </div>
                    <div className="text-xs text-gray-500">
                        Variable rate: +2% on wazirx
                    </div>
                    </div>
                    <div className="conversation-rate font-semibold flex flex-col justify-center">
                        51,200,000 INR
                    </div>
                </div>

                <TradeLimits label="Limits"></TradeLimits>
                <TradeLimits label="Offer Valid For"></TradeLimits>

                <div className="meta flex justify-between">
                    <div className="payment-methods text-sm text-gray-500">
                        UPI | IMPS | Bank Transfer(India)
                    </div>
                    <div className="timestamp text-xs text-gray-500">
                        10 Hrs ago
                    </div>
                </div>

            </div>
        </div>
    )
}

export const ProfileItem = ({}) => {

    return (
        <div className="profile-item flex w-9/12">
            <ProfilePicture size="small" name="Luffy"/>
            <div className="flex flex-col justify-center">
                <div className="todo-profile-id text-sm font-semibold">
                    Luffy@ravi21W
                </div>
                <div className="todo-profile-link text-xs">
                    Your Link
                </div>
            </div>
        </div>
    )
}

export const TradeLimits = ({label}) => {
            return(
                <div className="trade-limits-label mb-4 flex flex-row no-wrap justify-start">
                    <div className="text-gray-300 mr-2 font-light">
                        {label}
                    </div>
                    <div className="trade-limits-limits">
                        20,000 INR - 40,000 INR
                    </div>
                </div>
            )
}