import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Divya Sharma | Premium Personal Brand & Portfolio Hub",
  description: "Official portfolio of Divya Sharma — Soft Skills Trainer, Branch Operations Manager, Psychology Scholar, and Learning & Development Professional.",
  keywords: [
    "Divya Sharma",
    "Soft Skills Trainer",
    "Branch Manager",
    "Psychology Student",
    "Learning & Development Professional",
    "Mandi",
    "Himachal Pradesh",
    "Mahindra Pride Classroom",
    "TOT Certified Trainer"
  ],
  authors: [{ name: "Divya Sharma" }],
  creator: "Divya Sharma",
  metadataBase: new URL("https://divyasharma.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://divyasharma.vercel.app",
    title: "Divya Sharma | Premium Personal Brand & Portfolio Hub",
    description: "Empowering youth, corporate teams, and institutions through customized soft skills modules, emotional intelligence mentoring, and robust leadership operations.",
    siteName: "Divya Sharma Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Divya Sharma | L&D Professional Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Divya Sharma | Premium Personal Brand Hub",
    description: "Official portfolio of Divya Sharma — Soft Skills Trainer, Branch Operations Manager, and Psychology Scholar.",
    images: ["/og-image.png"],
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0B1120] text-white min-h-screen flex flex-col font-body relative overflow-x-hidden antialiased">
        {/* Structured Schema.org Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Divya Sharma",
              "jobTitle": [
                "Soft Skills Trainer",
                "Branch Manager",
                "Counseling Psychologist Scholar"
              ],
              "url": "https://divyasharma.vercel.app",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Mandi",
                "addressRegion": "Himachal Pradesh",
                "addressCountry": "India"
              },
              "knowsAbout": [
                "Soft Skills Training",
                "Leadership coaching",
                "Team Management",
                "Financial Operations",
                "Behavioral Psychology"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Himalaya Gramin Nidhi Ltd"
              }
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
