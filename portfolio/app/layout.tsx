import { ThemeProvider } from "./components/ThemeProvider";
import "./globals.css";

export const metadata = {
  title: "MERN Stack Developer | AI Enthusiast",
  description: "Portfolio of a freelance MERN stack developer specializing in modern, interactive, and AI-powered web applications.",
  openGraph: {
    title: "MERN Stack Developer | AI Enthusiast",
    description: "Portfolio of a freelance MERN stack developer specializing in modern, interactive, and AI-powered web applications.",
    url: "https://your-portfolio-url.com",
    siteName: "MERN Developer Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
