import React, { useState } from "react";
import PropTypes from "prop-types";

export const Tabs = (children) => {
  const tabNames = [];
  const tabChildren = {};

  children.children.forEach((child) => {
    if (React.isValidElement(child)) {
      tabNames.push(child.props.label);
      tabChildren[child.props.label] = child.props.children;
    }
  });

  const [active, setActive] = useState(tabNames[0]);

  return (
    <div className="tabs w-full mx-4 p-4">
      <div className="tab-header w-full py-4 text-gray-400 ">
        {tabNames && (
          <ul className="flex justify-between bg-gray-800 w-full p-4 border-solid border-2 border-gray-700 rounded-md">
            {tabNames.map((name) => {
              return (
                <li
                  onClick={() => setActive(name)}
                  key={name}
                  className={`cursor-pointer ${
                    name === active
                      ? "active text-primary border-solid border-b-2 border-primary"
                      : null
                  }`}
                >
                  {name}
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="tab-content">
        {Object.keys(tabChildren).map((key) => {
          if (key === active)
            return <div className="tab-child">{tabChildren[key]}</div>;
          return null;
        })}
      </div>
    </div>
  );
};

export const Tab = (children) => {
  return <div className="tab">{children}</div>;
};

Tabs.propTypes = {
  children: (props, propName) => {
    const prop = props[propName];
    return React.Children.forEach(prop, (child) => {
      return (
        child.type !== Tab ??
        new Error("Children of `Tabs` should be of type `Tab` only.")
      );
    });
  },
};

Tab.propTypes = {
  name: PropTypes.string,
};
