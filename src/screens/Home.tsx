import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import pattern from "../assets/pattern.svg";
import useMedia from "../hooks/useMedia";
import ArticleList from "../components/ArticleList";
import ImageBlock from "../components/ImageBlock";
import TitleBlock from "../components/TitleBlock";

interface Props {}

const Home: React.FC<Props> = (props) => {
  const isSmallScreen = useMedia(["(max-width: 800px)"], [true], false);

  return (
    <div className="screen">
      <div
        style={{
          margin: isSmallScreen ? "0 auto" : "110px 13% 173px 13%",
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
        }}
      >
        <ImageBlock />
        <div style={styles.spacer} />
        <div style={styles.titleAndArticlesContainer}>
          <TitleBlock />
          <ArticleList />
        </div>
      </div>

      {!isSmallScreen && (
        <>
          <div id="rectangle9"></div>
          <div id="rectangle15"></div>
          <div id="rectangle10"></div>
        </>
      )}
      <img
        style={{ position: "absolute", bottom: -220, right: 0 }}
        src={pattern}
        alt="block pattern"
      />
    </div>
  );
};

const styles = {
  spacer: { width: 80, height: 80 },
  titleAndArticlesContainer: {
    display: "flex",
    flexDirection: "column" as "column",
    padding: 10,
  },
};

export default Home;
