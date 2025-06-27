import React from "react";
import { Header } from "../components/header/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "../components";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
