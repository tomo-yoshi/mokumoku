import type { NextPage } from "next";
import { Navbar } from "../components/common/Navbar";

const Home: NextPage = () => {
  return (
    <div className="">
      <Navbar />
      <div className="bg-theme_blue min-h-screen w-screen mt-20 lg:mt-0">
        <h1 className="text-center underline font-primary bg-gradient-to-r from-theme_purple to-theme_blue">
          Hello MokuMoku-Kai!!!
        </h1>
        <button className="btn btn-primary text-theme_blue">TEST</button>
      </div>
    </div>
  );
};

export default Home;
