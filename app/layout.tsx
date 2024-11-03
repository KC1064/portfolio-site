import "./globals.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Kironmay Mishra Portfolio</title>
        <link rel="icon" href="./favicon_io/android-chrome-192x192.png" />
      </Head>
      <body className=""> 
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="w-full flex justify-center bg-[#e4f9ff] dark:bg-[#020712]">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
