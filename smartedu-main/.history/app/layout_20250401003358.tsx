import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
const inter = Inter({
    subsets: ['latin'],
});
export const metadata: Metadata = {
    title: 'My New App',
    description: 'Author: @Dang K',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" data-oid="6iu8iuf">
            <body className={inter.className} data-oid="mqxzf2x">
                {children}
            </body>
        </html>
    );
}
