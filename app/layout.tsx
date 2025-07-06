import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { siteConfig } from "@/lib/config"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: ["Anton Sokur", "Sokur", "Anton", "web developer", "Anton Sokur portfolio", "front-end development", "back-end development", "web development projects", "HTML", "CSS", "JavaScript", "React.js", "Next.js", "Software Engineer", "Software Engineering", "Student", "Anton Sokur contact", "Machine Learning Engineer", "Machine Learning", "AI Engineer", "AI Engineering", "Anton Sokur CV", "Anton Sokur resume"],
  authors: {
    name: siteConfig.fullName,
  },
  robots: "index, follow"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
