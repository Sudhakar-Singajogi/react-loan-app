import React from "react";
import RecentFeeder from "../Components/RecentFeeder";
import LoginIndex from "../Components/Logins/LoginIndex";
import TwoBoxLayout from "../Components/TwoBoxLayout";
function HomePage() {
  return <TwoBoxLayout params={{"leftCardComponent":RecentFeeder, "rightCardComponent":LoginIndex}} />
}

export default HomePage;
