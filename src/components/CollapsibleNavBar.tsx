import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import useMedia from "../hooks/useMedia";
import Dropdown from "./Dropdown";

const CollapsibleNavButtons = () => {
  const [showDropdown, setShowDropdown] = React.useState(false);

  const isSmallScreen = useMedia(["(max-width: 800px)"], [true], false);

  const history = useHistory();
  const signup = () => history.push("./signup");

  return isSmallScreen ? (
    <>
      <button onClick={() => setShowDropdown(!showDropdown)}>
        <i className="material-icons">{showDropdown ? "close" : "menu"}</i>
      </button>
      <Dropdown
        upArrowStyle={styles.dropdownUparrowSmallScreen}
        containerStyle={styles.dropdownContainerSmallScreen}
        close={() => setShowDropdown(false)}
        isOpen={showDropdown}
        navOptions={getNavOptions(isSmallScreen)}
      />
    </>
  ) : (
    <div style={styles.container}>
      <nav>
        <div style={styles.navbarContainer}>
          <NavLink
            style={styles.navlink}
            activeStyle={styles.activeNavLink}
            to="/blog"
          >
            Blog
          </NavLink>

          <NavLink
            style={styles.navlink}
            activeStyle={styles.activeNavLink}
            to="/services"
          >
            Services
          </NavLink>

          <div
            style={{ ...styles.navlink, position: "relative", display: "flex" }}
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <div
              className="toggleDropdown"
              style={{ display: "flex", alignItems: "center" }}
            >
              More
              <i style={{ alignSelf: "center" }} className="material-icons">
                {showDropdown ? "expand_less" : "expand_more"}
              </i>
            </div>
            <Dropdown
              upArrowStyle={styles.dropdownUparrow}
              containerStyle={styles.dropdownContainer}
              close={() => setShowDropdown(false)}
              isOpen={showDropdown}
              navOptions={getNavOptions(isSmallScreen)}
            />
          </div>
        </div>
      </nav>
      <button
        className="signupButton"
        onClick={signup}
        type="button"
        style={styles.signupButton}
      >
        SIGN UP
      </button>
    </div>
  );
};

export type NavOption = {
  name: string;
  to: string;
};

const getNavOptions = (isSmallScreen: boolean): NavOption[] =>
  isSmallScreen
    ? [
        { name: "Blog", to: "/blog" },
        { name: "Services", to: "/services" },
        { name: "Pricing", to: "/pricing" },
        { name: "How It Works", to: "/howitworks" },
        { name: "Careers", to: "/careers" },
        { name: "Sign Up", to: "/signup" },
      ]
    : [
        { name: "Pricing", to: "/pricing" },
        { name: "How It Works", to: "/howitworks" },
        { name: "Careers", to: "/careers" },
      ];

const styles = {
  container: { display: "flex", alignItems: "center" },
  navbarContainer: { display: "flex", alignItems: "center" },
  navlink: {
    color: "#000",
    padding: 5,
    marginRight: 30,
    textDecoration: "none",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 14,
    letterSpacing: "0.02em",
    display: "inline-flex",
    alignItems: "center",
  },
  activeNavLink: { color: "#e08568" },
  signupButton: {
    fontWeight: 600,
    fontStyle: "normal",
    fontSize: 12,
    alignItems: "center",
    textAlign: "center" as "center",
    letterSpacing: "0.17em",
    color: "#FFFFFF",
    borderRadius: 40,
    borderWidth: 0,
    width: 132,
    height: 40,
  },
  dropdownContainer: {
    position: "absolute" as "absolute",
    right: -192 / 2 + 3,
    top: 40,
  },
  dropdownContainerSmallScreen: {
    position: "absolute" as "absolute",
    right: 10,
    top: 60,
  },
  dropdownUparrow: {
    position: "absolute" as "absolute",
    top: -14 / 2,
    left: 192 / 2 + 14 / 2,
    borderLeft: "7px solid transparent",
    borderRight: "7px solid transparent",
    borderBottom: "7px solid #FFF",
  },
  dropdownUparrowSmallScreen: {
    position: "absolute" as "absolute",
    top: -14 / 2,
    right: 30,
    borderLeft: "7px solid transparent",
    borderRight: "7px solid transparent",
    borderBottom: "7px solid #FFF",
  },
};

export default CollapsibleNavButtons;
