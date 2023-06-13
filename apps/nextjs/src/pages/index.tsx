import type { NextPage } from "next";

import Main from "~/templates/Main";
import { Meta } from "~/meta/meta";

import HomeScreen from "~/components/HomeScreen";
import FeatureScreen from "~/components/FeatureHome";
import { ScrollContext } from "~/utils/scroll-observer";
import { useContext } from "react";

const Home: NextPage = () => {
  const { scrollY } = useContext(ScrollContext)
  console.log(scrollY, 'ScrollY')
  return (
    <Main meta={
      <Meta title="leadistro" description="Web App for Marketing by leadistro" />
    }>
      <HomeScreen />
      <FeatureScreen />
    </Main>
  );
};
export default Home;
