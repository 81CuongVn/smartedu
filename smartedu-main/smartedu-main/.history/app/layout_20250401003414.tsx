import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
const inter = Inter({
    subsets: ['latin'],
});
export const metadata: Metadata = {
    title: 'smartEdu',
    description: 'Author: @Dang Khoi',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" data-oid="ze:ao:p">
            <body className={inter.className} data-oid="mxp7o07">
                {children}
            </body>
        </html>
    );
}
