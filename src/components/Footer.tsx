import React from "react";

interface Props {}

const Footer: React.FC<Props> = (props) => {
  return (
    <div style={styles.container}>
      <div style={styles.textbox}>Footer</div>
    </div>
  );
};

const styles = {
  container: {
    height: 117,
    width: "100%",
    background: "#182048",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textbox: {
    width: 608,
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 25,
    textAlign: "center" as "center",
    color: "#FFFFFF",
  },
};

export default Footer;
