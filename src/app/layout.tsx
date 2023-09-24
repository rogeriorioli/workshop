import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "designhope | Workshop",
  description: `Workshop mão na massa!
Desenvolvendo LandingPages 
com Next Js, Prisma  e 
persistindo todos os dados dos    
Leads com PostgresSql `,
  openGraph: {
    images: ["/ogimage.png"],
    title: "designhope | Workshop",
    description: `Workshop mão na massa!
Desenvolvendo LandingPages 
com Next Js, Prisma  e 
persistindo todos os dados dos    
Leads com PostgresSql `,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
