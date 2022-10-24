import type { NextPage } from "next";
import { Hero } from "../components/Hero";
import { TestClient } from "../components/TestClient";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <TestClient />
    </>
  );
};

export default Home;
