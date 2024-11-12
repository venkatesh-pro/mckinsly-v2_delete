"use client";
import Header from "@/components/ui/header";
import React, { ReactNode, useEffect } from "react";
import { useIsDarkStore } from "@/store";

interface AppProps {
  children: React.ReactNode;
}

const App = ({ children }: AppProps) => {
  const { isDark, updateIsDark } = useIsDarkStore();

  useEffect(() => {
    window?.localStorage?.setItem("isDark", isDark.toString());
  }, [isDark]);

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="dark:bg-gray-950 font-inter text-base dark:text-gray-200 antialiased">
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip ">
          <Header isDark={isDark} updateIsDark={updateIsDark} />
          {children}
        </div>
      </div>
    </div>
  );
};

export default App;
