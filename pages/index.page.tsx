import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <h1 className="text-center underline font-primary bg-gradient-to-r from-theme_purple to-theme_blue">
        Hello MokuMoku-Kai!!!
      </h1>
      <button className="btn btn-primary text-theme_blue">TEST</button>
    </>
  );
};

export default Home;
