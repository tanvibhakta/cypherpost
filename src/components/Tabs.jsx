import React, { useState } from "react";
import PropTypes from "prop-types";

export const Tabs = (children) => {
    const [activeTab, setActiveTab] = useState();

    const onClickTabItem = (tab) => {
        console.log("active tab is", tab.target.innerHTML)
        setActiveTab(tab.target.innerHTML);
    }

    return(
        <div className="tabs">
            <ol className="tab-list">
                {children.children.map((child)=>{
                    const label = child.props.label;
                    return (
                        <Tab
                            activeTab={activeTab}
                            key={label}
                            label={label}
                            onClick={onClickTabItem}
                        />
                    )
                })}
            </ol>
            <div className="tab-content">
                {children.children.map((child)=>{
                    const label = child.props.label;
                    return label === activeTab ?? child;
                })}
            </div>
        </div>)
};

export const Tab = ({activeTab, label, onClick}) => {

    return (
        <li
            className={`tab-list-item ${activeTab === label ?? "tab-list-active" }`}
            onClick={onClick}
        >
            {label}
        </li>
    )
}


Tabs.propTypes = {
    // tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
}

Tab.propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}