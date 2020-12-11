import React from "react";
import Logo from "./Logo";
import CollapsibleNavBar from "./CollapsibleNavBar";

interface Props {}

const Topnav: React.FC<Props> = (props) => {
  return (
    <div style={styles.container}>
      <Logo width={108} />
      <CollapsibleNavBar />
    </div>
  );
};

const styles = {
  container: {
    maxHeight: 72,
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
    paddingLeft: "7.68%",
    paddingRight: "7.68%",
    borderBottom: "1px solid #E5DEDE",
  },
};

export default Topnav;
