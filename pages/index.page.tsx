import type { NextPage } from "next";
import TestClient from "../components/TestClient";

const Home: NextPage = () => {
  return (
    <>
      <h1 className="text-center underline font-primary bg-gradient-to-r from-theme_purple to-theme_blue">
        Hello MokuMoku-Kai!!!
      </h1>
      <TestClient />
      <button className="btn btn-primary text-theme_blue">TEST</button>
    </>
  );
};

export default Home;
