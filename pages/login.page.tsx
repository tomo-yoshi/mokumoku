import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

const login: NextPage = () => {
  const session = useSession();
  const supabase = useSupabaseClient();
  const signInWithTwitter = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "twitter",
    });
  };
  return (
    <>
      {!session ? (
        <div className="w-10/12 mx-auto min-h-screen flex justify-center items-center">
          <div className="w-1/2 flex flex-col justify-center items-center gap-10">
            <h1 className="text-5xl font-secondary">Login / Sign Up</h1>
            <img
              src="assets/img/twitter_icon.png"
              className="w-28 h-28 object-cover"
            />
            <form onSubmit={signInWithTwitter} className="flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <input type="checkbox" required className="checkbox" />
                <Link href="/policy">
                  <a className="link">Terms and conditions</a>
                </Link>
              </div>
              <button
                type="submit"
                className="font-secondary text-white bg-gradient-to-r from-theme_purple to-theme_blue py-2 px-5 rounded-md"
              >
                Login / Sign Up with Twitter
              </button>
            </form>
          </div>
          <div className="w-1/2 flex justify-center">
            <div className="relative w-72 h-72 bg-gradient-to-r from-theme_purple to-theme_blue rounded-full shadow-xl">
              <img
                src="assets/img/signup.png"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-9/12 object-cover bg-white/20 rounded-full shadow-inner"
                alt="signup-page_img"
              />
            </div>
          </div>
        </div>
      ) : (
        <>
          <p>Account page will go here.</p>
        </>
      )}
    </>
  );
};

export default login;
