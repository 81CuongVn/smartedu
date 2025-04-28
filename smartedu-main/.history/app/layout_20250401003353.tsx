import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
const inter = Inter({
    subsets: ['latin'],
});
export const metadata: Metadata = {
    title: 'My New App',
    description: 'Author: ',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" data-oid="xs6l338">
            <body className={inter.className} data-oid="g7dyn0x">
                {children}
            </body>
        </html>
    );
}
