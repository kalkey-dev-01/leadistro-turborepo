import React from "react";
import { Redirect } from "expo-router";
// import { FlashList } from "@shopify/flash-list";

import { useAuth } from "~/utils/context/authContext";

const Index = () => {
  const user = useAuth()
  console.log('LOG USER FROM INDEX', user)
  return <Redirect href={'/'} />
};

export default Index;
