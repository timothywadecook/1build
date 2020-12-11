import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const TitleBlock: React.FC<Props> = () => {
  return (
    <div>
      <div style={styles.title}>
        Building is about getting around the obstacles that are presented to
        you.
      </div>
      <Link style={styles.learnmore} to="./blog">
        Learn More{" "}
        <i style={{ fontSize: 12 }} className="material-icons a">
          arrow_right_alt
        </i>
      </Link>
    </div>
  );
};

const styles = {
  title: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 36,
    letterSpacing: "0.02em",
    color: "#182048",
  },
  learnmore: {
    display: "flex",
    alignItems: "center",
    fontSize: 12,
    textDecoration: "none",
  },
};

export default TitleBlock;
