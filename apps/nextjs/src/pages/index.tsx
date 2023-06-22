import type { NextPage } from "next";

import Main from "~/templates/Main";
import { Meta } from "~/meta/meta";

import HomeScreen from "~/components/HomeScreen";
import FeatureScreen from "~/components/FeatureHome";
import PricingScreen from "~/components/PricingScreen";

const Home: NextPage = () => {
  return (
    <Main meta={
      <Meta title="leadistro" description="Web App for Marketing by leadistro" />
    }>
      <HomeScreen />
      <FeatureScreen />
      <PricingScreen />
    </Main>
  );
};
export default Home;

// import { ScrollContext } from "~/utils/scroll-observer";
// import { useContext } from "react";
// import { api } from "~/utils/api";
// import Horiz from "~/components/HorizontalPage";
// const { scrollY } = useContext(ScrollContext)
// console.log(scrollY, 'ScrollY')