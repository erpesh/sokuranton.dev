import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from "../components/nav-bar";
import RightSidebar from "../components/right-sidebar";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        <RightSidebar/>
        {children}
      </body>
    </html>
  )
}