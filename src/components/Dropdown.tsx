import React from "react";
import { NavLink } from "react-router-dom";
import { NavOption } from "./CollapsibleNavBar";

interface Props {
  containerStyle: React.CSSProperties;
  upArrowStyle: React.CSSProperties;
  close: () => void;
  isOpen: boolean;
  navOptions: NavOption[];
}

const Dropdown: React.FC<Props> = ({
  isOpen,
  close,
  navOptions,
  containerStyle,
  upArrowStyle,
}) => {
  return !isOpen ? null : (
    <div style={containerStyle}>
      <div style={styles.dropdown}>
        {navOptions.map((option) => (
          <NavLink
            key={option.name}
            to={option.to}
            style={styles.dropwdownNavlink}
            activeStyle={styles.activeNavLink}
            onClick={close}
          >
            {option.name}
          </NavLink>
        ))}

        <div style={upArrowStyle}></div>
      </div>
    </div>
  );
};

const styles = {
  dropdown: {
    position: "relative" as "relative",
    width: 192,
    display: "flex",
    flexDirection: "column" as "column",
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: "16px 4px 16px 24px",
    boxShadow:
      "0px 24px 44px -10px rgba(0, 0, 0, 0.35), 0px 9px 24px rgba(255, 103, 17, 0.25)",
  },
  dropwdownNavlink: {
    textDecoration: "none",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 14,
    letterSpacing: "0.02em",
    color: "#000",
    padding: 5,
  },
  activeNavLink: { color: "#e08568" },
};

export default Dropdown;
