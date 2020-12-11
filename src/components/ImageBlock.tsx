import React from "react";
import useMedia from "../hooks/useMedia";
import image from "../assets/mainimage.png";

interface Props {}

const ImageBlock: React.FC<Props> = () => {
  const isSmallScreen = useMedia(["(max-width: 800px)"], [true], false);
  return (
    <img
      style={styles.image}
      width={479}
      height={isSmallScreen ? 400 : "auto"}
      src={image}
      alt="1build home"
    />
  );
};

const styles = {
  image: {
    backgroundColor: "rgba(17, 90, 157, 0.15)",
    boxShadow: "0px 50px 100px",
    maxHeight: 665,
    maxWidth: "100vw",
    alignSelf: "center",
  },
};

export default ImageBlock;
