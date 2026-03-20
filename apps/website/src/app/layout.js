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

import ReCaptchaProvider from "@/components/providers/ReCaptchaProvider"; 

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
                bg-background
                text-foreground
                transition-colors duration-500 ease-in-out`}
            >
                <ReCaptchaProvider> 
                    <RegisterSW />

                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                    >
                        <div className="min-h-screen bg-background transition-colors duration-500">
                            <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER} />

                            <Header />

                            <main className="relative z-10">{children}</main>

                            <Footer />
                            <BackToTop />
                        </div>
                    </ThemeProvider>
                </ReCaptchaProvider>

                {/* Structured Data */}
                <JsonLd schema={globalSchema} id="global-schema" />
                <JsonLd schema={navigationSchema} id="navigation-schema" />
            </body>
        </html>
    );
}