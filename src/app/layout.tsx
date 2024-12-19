import type { Metadata } from "next"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Roboto } from "next/font/google"
import localFont from "next/font/local"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ThemeProvider } from "@/components/providers/theme-provider"
// import { Toaster } from "@/components/ui/toaster"

// import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
// import { koKR } from '@clerk/localizations'

import "./globals.css"

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["nanumSquareNeo"]
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const nanumSquareNeo = localFont({
  src: [
    {
      path: "./assets/fonts/nanum-square-neo/woff2/NanumSquareNeoTTF-aLt.woff2",
      weight: "100",
      style: "normal"
    },
    {
      path: "./assets/fonts/nanum-square-neo/woff2/NanumSquareNeoTTF-bRg.woff2",
      weight: "300",
      style: "normal"
    },
    {
      path: "./assets/fonts/nanum-square-neo/woff2/NanumSquareNeoTTF-cBd.woff2",
      weight: "500",
      style: "normal"
    },
    {
      path: "./assets/fonts/nanum-square-neo/woff2/NanumSquareNeoTTF-dEb.woff2",
      weight: "700",
      style: "normal"
    },
    {
      path: "./assets/fonts/nanum-square-neo/woff2/NanumSquareNeoTTF-eHv.woff2",
      weight: "900",
      style: "normal"
    }
  ]
})

export const metadata: Metadata = {
  title: "tauri-nextjs-boilerplate",
  description: "io.oeoe.tauri-nextjs-boilerplate metadata description",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    url: "https://google.com",
    title: "tauri-nextjs-boilerplate",
    description: "io.oeoe.tauri-nextjs-boilerplate metadata description",
    type: "website"
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // <ClerkProvider localization={koKR}>
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.className}  antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
    // </ClerkProvider>
  )
}
