import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: 'Kironmay Mishra',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
