import React from "react";
import moment from "moment";
import useArticles, { ArticleT } from "../hooks/useArticles";

interface Props {}

const ArticleList: React.FC<Props> = (props) => {
  const articles: ArticleT[] = useArticles();

  return (
    <div style={{ marginTop: 40, marginBottom: 40 }}>
      {articles.map((a, i) => (
        <ListItem key={a.posted} {...a} i={i} />
      ))}
    </div>
  );
};

const ListItem = ({ title, author, posted, i }: ArticleT & { i: number }) => {
  return (
    <div style={styles.container}>
      <div style={styles.bullet}>
        <div style={styles.bulletNumber}>{i}</div>
      </div>
      <div style={styles.contentContainer}>
        <div style={styles.title}>{title}</div>
        <div style={styles.subtitle}>
          {`${moment(posted)
            .fromNow()
            .toUpperCase()} \u00b7 ${author.toUpperCase()}`}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    paddingBottom: 20,
    paddingTop: 20,
    display: "flex",
    flexDirection: "row" as "row",
    alignItems: "center",
    borderBottom: "1px solid rgba(229, 222, 222, 0.5)",
  },
  contentContainer: {
    display: "inline-block",
    flexDirection: "column" as "column",
  },
  title: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 500,
    fontWize: 14,
    color: "#182048",
  },
  subtitle: {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "normal" as "normal",
    fontSize: 11,
    letterSpacing: 0.12,
    color: "#757DA8",
  },
  bullet: {
    marginRight: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #586CB3",
    borderRadius: 2,
    transform: "rotate(-45deg)",
    width: 20,
    height: 20,
    flexShrink: 0,
  },
  bulletNumber: {
    transform: "rotate(45deg)",
    // fontFamily: "AppleMyungjo", // can't find this online
    fontStyle: "normal",
    fontWeight: "normal" as "normal",
    fontSize: 12,
  },
};

export default ArticleList;
