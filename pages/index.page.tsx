import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import type { NextPage } from "next";
import { Hero } from "../components/Hero";
import { TestClient } from "../components/TestClient";

const Home: NextPage = () => {
  // The codes below(line 9-19) are just samples. Please delete them after checking how it works
  const context = useContext(AuthContext);
  useEffect(()=> {
    if (context !== null) {
      console.log(context)
      console.log('user', context.user);
      console.log('error', context.error);
      context.register();
      context.login();
      context.logout();
    }
  }, [])

  return (
    <>
      <Hero />
    </>
  );
};

export default Home;
