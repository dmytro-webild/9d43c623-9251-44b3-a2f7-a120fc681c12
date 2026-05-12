import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Public_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Home Town Curtains & Upholstery | Custom Curtains Abu Dhabi',
  description: 'Professional curtain design, upholstery restoration, and expert installation in Abu Dhabi. Bring elegance to your home with our bespoke services.',
  openGraph: {
    "title": "Home Town Curtains & Upholstery",
    "description": "Expert curtain and upholstery services in Abu Dhabi.",
    "siteName": "Home Town Curtains & Upholstery",
    "type": "website"
  },
};

const publicSans = Public_Sans({ variable: "--font-public-sans", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${publicSans.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
