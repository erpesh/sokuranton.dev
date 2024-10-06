import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google'
import NavBar from "../components/nav-bar";
import RightSidebar from "../components/right-sidebar";
import {Providers} from "./providers";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers>
        <NavBar/>
        <RightSidebar/>
        {children}
        <Analytics mode={'production'}/>
      </Providers>
      </body>
    </html>
  )
}