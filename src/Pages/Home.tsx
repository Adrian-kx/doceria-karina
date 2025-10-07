import React from "react";
import background from "./../Assets/background.png";
import Header from "../Components/Header";

const Home: React.FC = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",   
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Header />
    </section>
  );
};

export default Home;
