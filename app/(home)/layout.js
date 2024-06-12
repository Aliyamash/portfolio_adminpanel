
import Header from "@/components/layout/Header";
import "./globals.css";
import { Suspense } from "react";
import AOSCL from "@/components/libraries/AOSCL";
import Toastify from '@/components/libraries/Toastify'

import Sidebar from "@/components/layout/Sidebar";
import { AuthProvider } from "@/context/AuthContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
      <Suspense>
        <AuthProvider>
        <Header />

       
            <Sidebar/> 
       
       <main >
          {children}
        </main>
       
          <AOSCL/>
        <Toastify theme="dark"/>
        </AuthProvider>
          </Suspense>
      </body>
    </html>
  );
}
