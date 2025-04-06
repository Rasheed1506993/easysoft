
import { ReactNode } from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto">
        {children}
      </main>
      <footer className="p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} Rasheed Sharaf AL-Deen. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
