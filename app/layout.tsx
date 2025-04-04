import type { Metadata } from "next";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const galanoGrotesque = localFont({
  src: [
    {
      path: "./fonts/GalanoGrotesqueAltRegular.otf",
      weight: "400",
    },
    {
      path: "./fonts/GalanoGrotesqueMedium.otf",
      weight: "500",
    },
    {
      path: "./fonts/GalanoGrotesqueBold.otf",
      weight: "700",
    },
  ],
  variable: "--font-galano-grotesque",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Propity",
  description: "Unity Beyond Realty",
  icons: "/propityIcon.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${galanoGrotesque.variable} ${geistMono.variable} ${plusJakartaSans.variable} antialiased`}
      >
        {children}
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
}
