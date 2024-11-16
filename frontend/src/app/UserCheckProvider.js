"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const UserCheckProvider = ({ children }) => {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");
  return (
    <>
      {!isAdminRoute && <Navbar />}
      <main className="overflow-x-hidden">{children}</main>
      {!isAdminRoute && <Footer />}
    </>
  );
};
export default UserCheckProvider;
