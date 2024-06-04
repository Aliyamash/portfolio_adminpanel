
import "./globals.css";
import { Suspense } from "react";
import AOSCL from "@/components/libraries/AOSCL";
import Toastify from '@/components/libraries/Toastify'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Suspense>
        {children}

        <AOSCL/>
        <Toastify theme="dark"/>
        </Suspense>
      </body>
    </html>
  );
}
