import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ThemeProvider } from "../ThemeProvider";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider storageKey="vite-ui-theme">
      <div className="flex flex-col min-h-screen bg-portfolioDark selection:bg-cyan-300 selection:text-cyan-950">
        <Navbar />
        <div className="test-box"></div>
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
