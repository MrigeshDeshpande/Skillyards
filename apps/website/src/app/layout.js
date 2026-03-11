    import { Inter, Playfair_Display, Source_Sans_3 } from "next/font/google";
import "@/app/styles/globals.css";

import { ThemeProvider } from "@/app/context/ThemeContext";
import BackToTop from "@/components/BackToTop";
import JsonLd from "@/components/JsonLd";
import { globalSchema } from "@/components/GlobalSchema";
import { navigationSchema } from "@/components/NavigationSchema";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GoogleTagManager } from "@next/third-parties/google";
import RegisterSW from "@/components/RegisterSW";

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["500", "600", "700"],
    variable: "--font-playfair",
    display: "swap",
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600"],
    variable: "--font-inter",
    display: "swap",
});

const sourceSans = Source_Sans_3({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-source-sans",
    display: "swap",
});

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${inter.variable} ${sourceSans.variable} ${playfair.variable} 
  antialiased 
  bg-white dark:bg-neutral-950 
  text-neutral-900 dark:text-neutral-100 
  transition-colors duration-500 ease-in-out`}
            >
                <RegisterSW />
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    {/* Optional global background gradient for subtle polish */}
                    <div className="min-h-screen bg-linear-to-b from-white via-zinc-50 to-zinc-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-black transition-colors duration-500">
                        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER} />
                        <Header />

                        <main className="relative z-10">{children}</main>

                        <Footer />
                        <BackToTop />
                    </div>
                </ThemeProvider>

                {/* Structured Data */}
                <JsonLd schema={globalSchema} id="global-schema" />
                <JsonLd schema={navigationSchema} id="navigation-schema" />
            </body>
        </html>
    );
}
